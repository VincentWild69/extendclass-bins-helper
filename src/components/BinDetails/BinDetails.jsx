import { useParams } from 'react-router-dom';
import styles from './BinDetails.module.scss';

const BinDetails = ({ bin }) => {
  const { id } = useParams();
  return (
    <div className={styles.binDetails}>
      { typeof bin }
      {id}
      sadawdawdawdawdawdawdawdawdawdwww wrrawr
    </div>
  );
}

export default BinDetails;