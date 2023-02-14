import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({
  onClick,
  variant = 'primary',
  centered = false,
  fullWidth = false,
  border = false,
  className,
  children,
}) => {

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(styles.button, {
        [className]: className,
        [styles.primary]: variant === 'primary',
        [styles.clear]: variant === 'clear',
        [styles.danger]: variant === 'danger',
        [styles.neutral]: variant === 'neutral',
        [styles.confirm]: variant === 'confirm',
        [styles.centered]: centered,
        [styles.fullWidth]: fullWidth,
        [styles.border]: border,
      })}
    >
      {children}
    </button>
  );
}

export default Button;