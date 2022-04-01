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
        const updatedItems = [...state.items].sort(
          (item1, item2) => item1.price - item2.price
        );
        return {
          ...state,
          sortBy: "low-to-high",
          items: updatedItems,
        };
      } else if (action.payload === "high-to-low") {
        const updatedItems = [...state.items].sort(
          (item1, item2) => item2.price - item1.price
        );
        return {
          ...state,
          sortBy: "high-to-low",
          items: updatedItems,
        };
      } else if (action.payload === "rating") {
        const updatedItems = [...state.items].sort(
          (item1, item2) => item2.rating.value - item1.rating.value
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
      const newCategories = [...state.categories, action.payload];
      return {
        ...state,
        categories: newCategories,
      };

    case "REMOVE_CATEGORY":
      const updatedCategories = state.categories.filter(
        (category) => category !== action.payload
      );
      return {
        ...state,
        categories: updatedCategories,
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
