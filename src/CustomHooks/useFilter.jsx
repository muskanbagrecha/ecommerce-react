import { useContext } from "react";
import { FilterContext } from "../Context/filterContext";

const useFilter = () => useContext(FilterContext);

export { useFilter };
