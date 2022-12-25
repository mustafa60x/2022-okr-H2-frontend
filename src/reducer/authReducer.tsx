function reducer(state: any, action: any) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("accessToken", JSON.stringify(action.payload));
      localStorage.setItem("isAuth", JSON.stringify(true));

      return {
        ...state,
        // user: action.payload,
        isAuth: true,
      };
    case "LOGOUT":
      localStorage.removeItem("isAuth");

      return {
        ...state,
        // user: false,
        isAuth: false,
      };

    default:
      break;
  }
}

export default reducer;
