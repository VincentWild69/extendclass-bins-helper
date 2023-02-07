import styles from './Header.module.scss';
import Button from '../../ui/Button/Button';
import { useMainContext } from './../../Context/MainContext';
import HeaderApiKey from './../HeaderApiKey/HeaderApiKey';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { apiKey, clearMainContext } = useMainContext();
  const navigate = useNavigate();
  const onLogout = () => {
    clearMainContext();
    navigate("/");
  }

  return (
    <div className={styles.header}>
      <HeaderApiKey apiKey={apiKey} />
      {
        apiKey ? (
          <Button
            variant="clear"
            onClick={onLogout}
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