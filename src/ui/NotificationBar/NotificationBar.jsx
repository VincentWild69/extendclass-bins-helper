import { useNotification } from '../../Context/NotificationContext';
import { useEffect } from 'react';
import { NOTIFICATION_TYPES } from '../../constants/constants';
import styles from './NotificationBar.module.scss';
import Alert from './../Alert/Alert';

const NotificationBar = () => {
  const { SUCCESS } = NOTIFICATION_TYPES;
  const {
    type,
    title,
    message,
    clearNotification
  } = useNotification();

  useEffect(() => {
    let timer = null;
    if (message) {
      const timeout = type === SUCCESS ? 3000 : 5000;
      timer = setTimeout(() => {
        clearNotification();
      }, timeout);
    }
    return () => {
      if (timer) clearTimeout(timer);
    }
  }, [message])

  return (
    message !== null && (
      <div className={styles.notification}>
        <Alert
          type={type}
          title={title}
          message={message}
          onClose={clearNotification}
        />
      </div>
    )
  );
}

export default NotificationBar;