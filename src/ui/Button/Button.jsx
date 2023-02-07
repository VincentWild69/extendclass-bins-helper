import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({
  onClick,
  variant = 'primary',
  className,
  children,
  centered = false,
  fullWidth = false,
  border = false,
}) => {

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(styles.button, {
        [className]: className,
        [styles.primary]: variant === 'primary',
        [styles.clear]: variant === 'clear',
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