import { useMainContext } from '../../Context/MainContext';
import TextInput from '../../ui/TextInput/TextInput';
import styles from './EnterApiKeyForm.module.scss';
import { useState } from 'react';
import Button from '../../ui/Button/Button';
import { Navigate } from 'react-router-dom';


const EnterApiKeyForm = () => {
  const { apiKey, setApiKey } = useMainContext();

  const [inputValue, setInputValue] = useState('');

  if (apiKey) return <Navigate to="/" replace={true} />

  return (
      <div className={styles.enterApiKeyForm}>
        <p>Enter your API Key</p>
        <TextInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.enterApiKeyInput}
          placeholder="your api key..."
        />
        <Button
          onClick={() => setApiKey(inputValue)}
        >
          Confirm
        </Button>
      </div>
  );
}

export default EnterApiKeyForm;