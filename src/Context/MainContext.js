import { createContext, useContext, useState } from "react";

export const MainContext = createContext(null);

export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children, ...props }) => {
  const [apiKey, setApiKey] = useState('');
  const [binsList, setBinsList] = useState([]);
  
  const clearMainContext = () => {
    setApiKey('');
    setBinsList([]);
  }

  const valueForContextProvider = {
    apiKey,
    setApiKey,
    binsList,
    setBinsList,
    clearMainContext
  };

  return (
    <MainContext.Provider
      value={{...valueForContextProvider}}
      {...props}
    >
      {children}
    </MainContext.Provider>
  )
}