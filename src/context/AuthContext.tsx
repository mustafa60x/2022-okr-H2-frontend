import { createContext, useContext, useReducer } from "react";

import { authReducer } from "../reducer"

const Context = createContext(null);

const Provider = ({ children }) => {
  // const userLocal = localStorage.getItem('user')
  const isAuthLocal = localStorage.getItem('isAuth')

  const [state, dispatch] = useReducer(authReducer, {
    // user: userLocal ? JSON.parse(userLocal) : false,
    isAuth: isAuthLocal ? JSON.parse(isAuthLocal) : false,
  });

  const data = {
    ...state,
    dispatch,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context)


export default Provider