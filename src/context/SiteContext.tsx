import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const initTheme = localStorage.getItem("theme") || 'light'

  const [theme, setTheme] = useState(initTheme);

  const data = {
    theme,
    setTheme,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useSite = () => useContext(Context)


export default Provider