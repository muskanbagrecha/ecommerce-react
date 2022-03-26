import { useContext } from "react";
import { AlertContext } from "../Context/alertContext";

export const useAlert = () => useContext(AlertContext);
