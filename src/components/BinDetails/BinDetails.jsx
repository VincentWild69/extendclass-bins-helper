import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBinRequest } from '../../api/requests';
import { useNotification } from '../../Context/NotificationContext';
import { createRequestError } from './../../utils/createError';
import styles from './BinDetails.module.scss';
import Loader from './../../ui/Loader/Loader';
import Textarea from '../../ui/Textarea/Textarea';
import Button from './../../ui/Button/Button';
import ConfirmDialog from './../../ui/ConfirmDialog/ConfirmDialog';

const BinDetails = () => {
  const { id } = useParams();
  const { toggleNotification } = useNotification();
  const [bin, setBin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isConfirmDialog, setIsConfirmDialog] = useState(true);

  const handleConfirm = () => {
    console.log('confirmed');
    setIsConfirmDialog(false);
  }

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
      <p className={styles.binId}>{id}</p>
      <Textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className={styles.binDetailsButtons}>
        <Button
          variant="danger"
          onClick={() => setIsConfirmDialog(true)}
        >
          Delete bin
        </Button>
        <Button
          variant="primary"
        >
          Save changes
        </Button>
      </div>
      <ConfirmDialog
        title="Are you sure?"
        isOpen={isConfirmDialog}
        onConfirm={handleConfirm}
        onToggleDialog={() => setIsConfirmDialog(false)}
      />
    </div>
  );
}

export default BinDetails;