import { createContext, useContext, useReducer } from "react";

import { authReducer } from "../reducer"

const Context = createContext();

const Provider = ({ children }) => {
  const userLocal = localStorage.getItem('user')

  const [state, dispatch] = useReducer(authReducer, {
    user: userLocal ? JSON.parse(userLocal) : false,
  });

  const data = {
    ...state,
    dispatch,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context)


export default Provider