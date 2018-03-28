import React, {PropTypes} from 'react';
import styles from './GeocodeResult.css';

const geocodeResult = ({address, lat, lng}) => {
  return(
    <div className={styles.geocodeResult}>
      <ul className={styles.ul}>
        <li>住所: {address}</li>
        <li>緯度: {lat}</li>
        <li>経度: {lng}</li>
      </ul>
    </div>
  )
}

export default geocodeResult;
