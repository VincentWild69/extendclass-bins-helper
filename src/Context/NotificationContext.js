import { createContext, useContext, useState } from "react";
import NotificationBar from './../ui/NotificationBar/NotificationBar';

export const NotificationContext = createContext(null);

export const useNotification = () => useContext(NotificationContext);

export const NotificationContextProvider = ({ children }) => {
  const [notification, toggleNotification] = useState({
    type: null,
    title: null,
    message: null
  });

  const clearNotification = () => {
    toggleNotification({
      type: null,
      title: null,
      message: null
    })
  }

  const valueForContextProvider = {
    notification,
    toggleNotification,
    clearNotification
  };

  return (
    <NotificationContext.Provider
      value={{...valueForContextProvider}}
    >
      <NotificationBar />
      {children}
    </NotificationContext.Provider>
  )
}