import { createContext } from "react";
import { useReducer } from "react";
import { filterReducer } from "../Reducer";

const initialData = {
  sortBy: null,
  categories: [],
  rating: null,
  range: 0,
  excludeOutOfStock: false,
  search: "",
  items: [],
  initialState: [],
};

const FilterContext = createContext(initialData);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialData);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
