import { createContext, useContext, useState } from "react";
import NotificationBar from "../components/NotificationBar/NotificationBar";
import { NOTIFICATION_TYPES } from "../constants/constants";

export const NotificationContext = createContext(null);

export const useNotification = () => useContext(NotificationContext);

export const NotificationContextProvider = ({ children, ...props }) => {
  const [message, setMessage] = useState(null);
  const [title, setTitle] = useState(null);
  const [type, setType] = useState(null);

  const { SUCCESS } = NOTIFICATION_TYPES;
  const timeout = type === SUCCESS ? 2000 : 5000;

  const clearNotification = () => {
    setMessage(null);
    setType(null);
    setTitle(null);
  }

  const toggleNotification = ({ type, title, message }) => {
    setType(type);
    setTitle(title);
    setMessage(message);
    // setTimeout(() => {
    //   clearNotification();
    // }, timeout)
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