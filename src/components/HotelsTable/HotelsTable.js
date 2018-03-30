import React from 'react';
import styles from './HotelsTable.css';
import HotelsRow from './HotelsRow/HotelsRow'


const hotelsTable = ({hotels}) => {
  return (
    <div className={styles.hotelsTable}>
      <div className={styles.title}>
        <p>写真</p>
        <p>ホテル名</p>
        <p>値段</p>
        <p>レビュー</p>
        <p>レビュー件数</p>
      </div>
      {hotels.map((hotel) => (<HotelsRow key={hotel.id} hotel={hotel} />))}
    </div>
  )
}


export default hotelsTable
