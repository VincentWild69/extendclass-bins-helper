import clsx from 'clsx';
import styles from './Textarea.module.scss';


const Textarea = ({ value, onChange, className ='', placeholder = '' }) => {
  return (
      <textarea 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(styles.textarea, {
          [className]: className,
        })}
      />
  );
}

export default Textarea;