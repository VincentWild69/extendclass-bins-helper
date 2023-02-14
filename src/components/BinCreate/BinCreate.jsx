import { useState } from 'react';
import styles from './BinCreate.module.scss';
import Button from './../../ui/Button/Button';
import Textarea from '../../ui/Textarea/Textarea';


const BinCreate = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={styles.binCreate}>
      <Textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        variant='confirm'
        onClick={() => {}}
        className={styles.createBtn}
      >
        Create
      </Button>
    </div>
  );
}

export default BinCreate;