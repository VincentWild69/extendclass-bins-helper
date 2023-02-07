import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBinRequest } from '../../api/requests';
import { useNotification } from '../../Context/NotificationContext';
import { createRequestError } from './../../utils/createError';
import styles from './BinDetails.module.scss';
import Loader from './../../ui/Loader/Loader';
import Textarea from '../../ui/Textarea/Textarea';

const BinDetails = () => {
  const { id } = useParams();
  const { toggleNotification } = useNotification();
  const [bin, setBin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setIsLoading(true)
    getBinRequest(id)
      .then(res => {
        setBin(res.data);
        setInputValue(JSON.stringify(res.data, null, ' '));
      })
      .catch(err => createRequestError(err, toggleNotification))
      .finally(setIsLoading(false))
  }, [id]);

  if (isLoading) return <Loader boxHeight="60vh" />

  return (
    <div className={styles.binDetails}>
      <Textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default BinDetails;