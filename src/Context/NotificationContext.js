import { createContext, useContext, useState } from "react";
import NotificationBar from './../ui/NotificationBar/NotificationBar';

export const NotificationContext = createContext(null);

export const useNotification = () => useContext(NotificationContext);

export const NotificationContextProvider = ({ children, ...props }) => {
  const [message, setMessage] = useState(null);
  const [title, setTitle] = useState(null);
  const [type, setType] = useState(null);

  const clearNotification = () => {
    setMessage(null);
    setType(null);
    setTitle(null);
  }

  const toggleNotification = ({ type, title, message }) => {
    setType(type);
    if (title) setTitle(title);
    setMessage(message);
  }

  const valueForContextProvider = {
    type,
    setType,
    title,
    setTitle,
    message,
    setMessage,
    clearNotification,
    toggleNotification
  };

  return (
    <NotificationContext.Provider
      value={{...valueForContextProvider}}
      {...props}
    >
      <NotificationBar />
      {children}
    </NotificationContext.Provider>
  )
}