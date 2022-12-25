function reducer(state: any, action: any) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));

      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("user");

      return {
        ...state,
        user: false,
      };

    default:
      break;
  }
}

export default reducer;
