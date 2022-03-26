export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.encodedToken,
        user: action.payload.foundUser,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: {},
      };
    case "SIGNUP":
        return {
            ...state,
            isAuthenticated: true,
            token: action.payload.encodedToken,
            user: action.payload.createdUser,
        };
    default:
      return state;
  }
};
