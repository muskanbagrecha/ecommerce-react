import { createContext, useState, useEffect } from "react";

export const AlertContext = createContext({
  showAlert: false,
  alertMessage: null,
  type: null,
});

export const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState({
    showAlert: false,
    alertMessage: null,
    type: null,
  });

  useEffect(() => {
    const id = setTimeout(() => {
      setShowAlert({
        setShowAlert: false,
        alertMessage: null,
        type: null,
      });
    }, 3000);
    return () => clearTimeout(id);
  }, [showAlert.showAlert]);

  return (
    <AlertContext.Provider value={{ showAlert, setShowAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
