import { createContext, useContext, useReducer } from "react";

import { authReducer } from "../reducer"
import { isEmpty } from "../utils";

const Context = createContext(null);

const Provider = ({ children }) => {
  const userLocal = localStorage.getItem('user')
  const isAuthLocal = localStorage.getItem('isAuth')

  const [state, dispatch] = useReducer(authReducer, {
    user: !isEmpty(userLocal) ? JSON.parse(userLocal) : false,
    isAuth: !isEmpty(isAuthLocal) ? JSON.parse(isAuthLocal) : false,
  });

  const data = {
    ...state,
    dispatch,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context)


export default Provider