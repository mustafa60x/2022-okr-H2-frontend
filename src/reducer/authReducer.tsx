function reducer(state: any, action: any) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("accessToken", JSON.stringify(action.payload.accessToken));
      localStorage.setItem("isAuth", JSON.stringify(true));

      return {
        ...state,
        user: action.payload.user,
        isAuth: true,
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("isAuth");

      return {
        ...state,
        user: false,
        isAuth: false,
      };

    default:
      break;
  }
}

export default reducer;
