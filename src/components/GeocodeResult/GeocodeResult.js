import React from 'react';
import styles from './GeocodeResult.css';

const geocodeResult = (props) => {
  return(
    <div className={styles.geocodeResult}>
      <ul className={styles.ul}>
        <li>住所: {props.address}</li>
        <li>緯度: {props.lat}</li>
        <li>経度: {props.lng}</li>
      </ul>
    </div>
  )
}

export default geocodeResult;
