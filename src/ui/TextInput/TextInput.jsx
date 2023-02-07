import clsx from 'clsx';
import styles from './TextInput.module.scss';

const TextInput = ({ value, onChange, className, placeholder = '' }) => {

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx(styles.textInput, {
        [className]: className,
      })}
    />
  );
}

export default TextInput;