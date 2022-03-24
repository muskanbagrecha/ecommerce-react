import { createContext, useContext } from "react";
import { useReducer } from "react";
import { filterReducer } from "../Reducer";

const FilterContext = createContext({
  sortBy: null,
  categories: [],
  rating: null,
  range: 0,
  excludeOutOfStock: false,
  search: null,
  items: [],
  initialState: [],
});

const FilterProvider = ({ children }) => {

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: null,
    categories: [],
    rating: null,
    range: 0,
    excludeOutOfStock: false,
    search: null,
    items: [],
    initialState: [],
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
