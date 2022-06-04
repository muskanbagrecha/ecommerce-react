import { useContext } from "react";
import { ToastContext } from "../Context/toastContext";

export const useToast = () => useContext(ToastContext);