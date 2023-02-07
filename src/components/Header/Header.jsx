import styles from './Header.module.scss';
import Button from '../../ui/Button/Button';
import { useMainContext } from './../../Context/MainContext';
import HeaderApiKey from './../HeaderApiKey/HeaderApiKey';
import { Link } from 'react-router-dom';

const Header = () => {
  const { apiKey, setApiKey } = useMainContext();

  return (
    <div className={styles.header}>
      <HeaderApiKey apiKey={apiKey} />
      {
        apiKey ? (
          <Button
            variant="clear"
            onClick={() => setApiKey('')}
          >
            Logout
          </Button>
        ) : (
          <Link to="enter-api-key" className={styles.enterApiKeyLink}>
            Enter
          </Link>
        )
      }
    </div>
  );
}

export default Header;