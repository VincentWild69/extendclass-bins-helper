import styles from './Header.module.scss';
import Button from '../../ui/Button/Button';
import { MainContext } from './../../Context/MainContext';
import { useContext } from 'react';

const Header = () => {
  const context = useContext(MainContext);

  return (
    <div className={styles.header}>
      <div></div>
      <Button
        variant="clear"
      >
        Logout
      </Button>
    </div>
  );
}

export default Header;