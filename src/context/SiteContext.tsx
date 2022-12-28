import { createContext, useContext, useReducer } from "react";

import { siteReducer } from "../reducer"

const Context = createContext(null);

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer<any>(siteReducer, {
    theme: localStorage.getItem('theme') || 'light',
  })

  const data = {
    ...state as any,
    dispatch
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useSite = () => useContext(Context)


export default Provider