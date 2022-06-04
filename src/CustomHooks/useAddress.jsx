import { useContext } from "react";
import { AddressContext } from "../Context/addressContext";

export const useAddress = () => useContext(AddressContext);
