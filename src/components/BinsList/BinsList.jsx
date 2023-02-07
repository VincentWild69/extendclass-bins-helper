import { useMainContext } from '../../Context/MainContext';
import styles from './BinsList.module.scss';
import { Link } from 'react-router-dom';
import Button from './../../ui/Button/Button';


const BinsList = () => {
  const { binsList } = useMainContext();

  return (
    <div className={styles.binsList}>
      <Button
        onClick={() => {}}
        fullWidth
        border
        className={styles.createBtn}
      >
        Create new bin
      </Button>
      {
        binsList.length === 0 ? (
          <p>No bins by current api key</p>
        ) : (
          binsList.map((bin) => (
            <Link to={`bins/${bin}`} className={styles.binLink} key={bin}>
              {bin}
            </Link>
          ))
        )
      }
    </div>
  );
}

export default BinsList;