import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Fashgram Store`;
    } else {
      document.title = "Fashgram Store";
    }
  }, [title]);
};
