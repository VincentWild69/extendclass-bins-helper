import styles from './HeaderApiKey.module.scss';


const HeaderApiKey = ({ apiKey }) => {
  return (
      <div className={styles.headerApiKey}>
        {
          apiKey ? (
            <p>Current api key: <span className={styles.apiKey}>{apiKey}</span></p>
          ) : (
            <p>Api key not entered:</p>
          )
        }
      </div>
  );
}

export default HeaderApiKey;