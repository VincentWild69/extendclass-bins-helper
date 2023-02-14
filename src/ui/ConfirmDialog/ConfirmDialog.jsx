import styles from './ConfirmDialog.module.scss';
import ModalWindow from '../ModalWindow/ModalWindow';
import Button from './../Button/Button';

const ConfirmDialog = ({ title, isOpen, onConfirm, onToggleDialog }) => {
  return (
    isOpen && (
      <ModalWindow
        isCloseble={false}
        withCloseBtn={false}
      >
        <div className={styles.dialogBody}>
          {
            title && (
              <p className={styles.dialogTitle}>
                {title}
              </p>
            )
          }
          <div className={styles.dialogButtons}>
            <Button
              onClick={onToggleDialog}
              variant="neutral"
              border
            >
              Cancel
            </Button>
            <Button
              onClick={onConfirm}
              variant="confirm"
              border
            >
              Confirm
            </Button>
          </div>
        </div>
      </ModalWindow>
    )
  );
} 

export default ConfirmDialog;