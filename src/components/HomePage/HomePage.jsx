import styles from './HomePage.module.scss';
import Button from '../../ui/Button/Button';
import { useEffect, useState, useContext } from 'react';
import { getAllBinsIdsRequest } from './../../api/requests';
import Loader from '../../ui/Loader/Loader';
import TextInput from '../../ui/TextInput/TextInput';
import { MainContext } from './../../Context/MainContext';
import { useNotification } from '../../Context/NotificationContext';

const HomePage = () => {
  const [binsArr, setBinsArr] = useState([]);
  const { apiKey } = useContext(MainContext);
  const { toggleNotification } = useNotification();

  const b = [
    "03f6d7ddfdfa",
    "4998bc2936be",
    "6e9baf131f83",
    "9a35b7d32095",
    "a7321fdb77a6",
    "ba0b09863ead",
    "bb08408770e2",
    "bf4f1d8e1fec",
    "c3fd89a9b063",
    "c422400408fa"
];

  const handle = () => {
    toggleNotification({
      type: "warning",
      title: "fuck",
      message: 'SUCCESS is assigned a value but never used'
    })
  }

  // useEffect(() => {
  //   getAllBinsIdsRequest('3dwdawdawdffwaw')
  //     .then(res => setBinsArr(res.data))
  //     .catch((err) => {
  //       console.log(err.response.data.message);
  //     })
  // }, []);

  return (
    <div className={styles.homePage}>
      <Button onClick={handle}>click</Button>
      {
        binsArr.length === 0 ? <Loader /> : binsArr.map(bin => <p key={bin}>{bin}</p>)
      }
      <TextInput />
    </div>
  );
}

export default HomePage;