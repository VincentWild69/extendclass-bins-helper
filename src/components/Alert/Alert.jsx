import { NOTIFICATION_TYPES } from '../../constants/constants';
import SvgSelector from '../SvgSelector/SvgSelector';
import styles from './Alert.module.scss';

const { SUCCESS, ERROR, INFO } = NOTIFICATION_TYPES;

const Alert = ({ type = INFO, title = undefined, message, onClose }) => {
  if (!title && type === SUCCESS) title = "success!";
  if (!title && type === ERROR) title = "error!";

  return (
    <div className={styles.notification}>
      <div className={styles.notificationBody}>
        <div className={styles.icon}>
          <SvgSelector id={type} />
        </div>
        {
          title && <p className={styles.title}>{title}</p>
        }
        <p className={styles.message}>{message}</p>
      </div>
      <button onClick={onClose}>
        <SvgSelector id="close-btn" />
      </button>
    </div>
  );
}

export default Alert;