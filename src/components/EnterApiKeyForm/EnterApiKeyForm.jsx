import { useMainContext } from '../../Context/MainContext';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAllBinsIdsRequest } from '../../api/requests';
import { useNotification } from '../../Context/NotificationContext';
import { createRequestError } from './../../utils/createError';
import Loader from './../../ui/Loader/Loader';
import Button from '../../ui/Button/Button';
import TextInput from '../../ui/TextInput/TextInput';
import styles from './EnterApiKeyForm.module.scss';


const EnterApiKeyForm = () => {
  const { apiKey, setApiKey, setBinsList } = useMainContext();
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { toggleNotification } = useNotification();

  const onSubmit = () => {
    if (inputValue.trim() !== '') {
      setIsLoading(true);
      getAllBinsIdsRequest(inputValue.trim())
      .then(res => {
        setApiKey(inputValue.trim());
        setBinsList(res.data);
        toggleNotification({
          type: 'success',
          message: 'Api confirmed!'
        })
      })
      .catch(err => {
        createRequestError(err, toggleNotification);
      })
      .finally(setIsLoading(false));
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