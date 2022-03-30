const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...state,
        items: action.payload,
        initialState: action.payload,
      };

    case "SORT_BY":
      if (action.payload === "low-to-high") {
        const updatedItems = [...state.items].sort((item1, item2) =>
          parseInt(item1.price, 10) < parseInt(item2.price, 10) ? -1 : 1
        );
        return {
          ...state,
          sortBy: "low-to-high",
          items: updatedItems,
        };
      } else if (action.payload === "high-to-low") {
        const updatedItems = [...state.items].sort((item1, item2) =>
          parseInt(item1.price, 10) > parseInt(item2.price, 10) ? -1 : 1
        );
        return {
          ...state,
          sortBy: "high-to-low",
          items: updatedItems,
        };
      } else if (action.payload === "rating") {
        const updatedItems = [...state.items].sort((item1, item2) =>
          parseFloat(item1.rating.value) > parseFloat(item2.rating.value) ? -1 : 1
        );
        return {
          ...state,
          sortBy: "rating",
          items: updatedItems,
        };
      } else {
        return state;
      }

    case "ADD_CATEGORY":
      const newCategory = action.payload;
      const updatedCategories = [...state.categories, newCategory];
      return {
        ...state,
        categories: updatedCategories,
      };

    case "REMOVE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category !== action.payload
        ),
      };

    case "PRICE_RANGE":
      return {
        ...state,
        range: action.payload,
      };

    case "RATING":
      return { ...state, rating: action.payload };

    case "STOCK":
      return {
        ...state,
        excludeOutOfStock: action.payload,
      };

    case "SEARCH": {
      return {
        ...state,
        search: action.payload,
      };
    }

    case "RESET":
      return {
        ...state,
        sortBy: null,
        categories: [],
        rating: null,
        range: 0,
        excludeOutOfStock: false,
        search: "",
        items: state.initialState,
      };
      
    default:
      return state;
  }
};

export default filterReducer;
