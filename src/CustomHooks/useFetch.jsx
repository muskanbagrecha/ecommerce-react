import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({ url, method, ...rest }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await axios({
          url,
          method,
          ...rest,
        });
        if (response.status === 200 || response.status === 201) {
          setData(response?.data);
          setLoading(false);
        } else {
          setError(response.statusText);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [url, method]);
  return { data, error, loading };
};

export { useFetch };
