import styles from './BinDetails.module.scss';

const BinDetails = ({ bin }) => {

  return (
    <div className={styles.binDetails}>
      { typeof bin }
    </div>
  );
}

export default BinDetails;