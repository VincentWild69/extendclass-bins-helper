import { createContext, useContext, useState } from "react";

export const MainContext = createContext(null);

export const useMainContext = () => useContext(MainContext);

const b = [
  "03f6d7ddfdfa",
  "4998bc2936be",
  "6e9baf131f83",
  "9a35b7d32095",
  "a7321fdb77a6",
  "ba0b09863ead",
  "bb08408770e2",
  "bf4f1d8e1fec",
  "c3fd89a9b063",
  "c422400408fa"
];

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