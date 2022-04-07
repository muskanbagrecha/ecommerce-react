import { createContext, useState } from "react";

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

  return (
    <AlertContext.Provider value={{ showAlert, setShowAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
