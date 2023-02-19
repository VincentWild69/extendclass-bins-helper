import { useMainContext } from '../../Context/MainContext';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from './../../ui/Loader/Loader';
import Button from '../../ui/Button/Button';
import TextInput from '../../ui/TextInput/TextInput';
import styles from './EnterApiKeyForm.module.scss';


const EnterApiKeyForm = () => {
  const { apiKey, onAuth, isLoading } = useMainContext();
  const [inputValue, setInputValue] = useState('');

  const onSubmit = () => {
    if (inputValue.trim() !== '') {
      onAuth(inputValue)
    }
  }

  if (apiKey) return <Navigate to="/" replace={true} />

  if (isLoading) return <Loader boxHeight="60vh" />

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
          onClick={onSubmit}
        >
          Confirm
        </Button>
      </div>
  );
}

export default EnterApiKeyForm;