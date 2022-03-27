import { createPortal } from "react-dom";
import "./Modal.css";

const Backdrop = ({ onReset }) => {
  return <div className="backdrop" onClick={onReset} />;
};

const ModalOverlay = (props) => {
  return <div className="modal">{props.children}</div>;
};

const Modal = ({ onReset, children }) => {
  return (
    <>
      {createPortal(
        <Backdrop onReset={onReset} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
