import styles from './ModalWindow.module.scss';
import SvgSelector from '../SvgSelector/SvgSelector';
import clsx from 'clsx';
import useBodyLockScroll from './../../hooks/useBodyLockScroll';

const ModalWindow = ({
  children,
  onClose = () => {},
  isCloseble = true,
  withCloseBtn = true,
  className = '',
}) => {
  useBodyLockScroll();

  return (
    <div
      onClick={isCloseble ? onClose : () => {}}
      className={styles.modalContainer}
    >
      <div className={styles.modalBody}>
        <div
          onClick={e => e.stopPropagation()}
          className={clsx(styles.modalContent, {[className]: className})}
        >
          {
            isCloseble && withCloseBtn && (
              <button
              onClick={onClose}
              className={styles.modalCloseBtn}
              >
                <SvgSelector id='close-btn'/>
              </button>
            )
          }
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;