import { createContext, useState } from "react";

export const MainContext = createContext(null);

export const MainContextProvider = ({ children, ...props }) => {
  const [apiKey, setApiKey] = useState('');

  return (
    <MainContext.Provider
      value={{
        apiKey,
        setApiKey
      }}
      {...props}
    >
      {children}
    </MainContext.Provider>
  )
}