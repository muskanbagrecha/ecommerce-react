import { createContext, useState } from "react";
const ModalContext = createContext({
  showModal: false,
});

const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
