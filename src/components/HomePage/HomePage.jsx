import styles from './HomePage.module.scss';
import Button from '../../ui/Button/Button';
import { useEffect, useState } from 'react';
import { getAllBinsIdsRequest } from './../../api/requests';
import Loader from '../../ui/Loader/Loader';

const HomePage = () => {
  const [binsArr, setBinsArr] = useState([]);

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
    console.log(typeof binsArr);
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
    </div>
  );
}

export default HomePage;