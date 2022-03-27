import { useContext } from "react";
import { ModalContext } from "../Context/modalContext";

export const useModal = () => useContext(ModalContext);
