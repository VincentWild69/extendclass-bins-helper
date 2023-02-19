import { createContext, useContext, useState } from "react";
import { getAllBinsIdsRequest } from './../api/requests';
import { useNotification } from "./NotificationContext";
import { createRequestError } from './../utils/createError';

export const MainContext = createContext(null);

export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState('');
  const [binsList, setBinsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toggleNotification } = useNotification();
  
  const clearMainContext = () => {
    setApiKey('');
    setBinsList([]);
    localStorage.removeItem('extclassapikey');
  }

  const onAuth = (apiKey) => {
    setIsLoading(true);
    getAllBinsIdsRequest(apiKey)
    .then(res => {
      setApiKey(apiKey);
      setBinsList(res.data);
      toggleNotification({
        type: 'success',
        message: 'Api confirmed!'
      })
      localStorage.setItem('extclassapikey', apiKey);
    })
    .catch(err => {
      createRequestError(err, toggleNotification);
    })
    .finally(() => setIsLoading(false));
  }

  const valueForContextProvider = {
    apiKey,
    setApiKey,
    binsList,
    setBinsList,
    clearMainContext,
    onAuth,
    isLoading
  };

  return (
    <MainContext.Provider
      value={{...valueForContextProvider}}
    >
      {children}
    </MainContext.Provider>
  )
}