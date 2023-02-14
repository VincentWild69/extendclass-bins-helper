import { useMainContext } from '../../Context/MainContext';
import styles from './BinsList.module.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from './../../ui/Button/Button';
import clsx from 'clsx';


const BinsList = () => {
  const { id } = useParams();
  const { binsList } = useMainContext();
  const navigate = useNavigate();

  return (
    <div className={styles.binsList}>
      <Button
        onClick={() => navigate('/bins/create')}
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
            <Link
              to={`bins/${bin}`}
              className={clsx(styles.binLink, { [styles.active]: bin === id})}
              key={bin}
            >
              {bin}
            </Link>
          ))
        )
      }
    </div>
  );
}

export default BinsList;