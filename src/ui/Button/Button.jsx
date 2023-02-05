import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({ onClick, variant = 'primary', className, children }) => {

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(styles.button, {
        [className]: className,
        [styles.primary]: variant === 'primary'
      })}
    >
      {children}
    </button>
  );
}

export default Button;