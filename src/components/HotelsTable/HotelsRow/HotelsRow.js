import React from 'react';
import styles from './HotelsRow.css'

const hotelsRow = ({hotel}) => {
  return (
    <div className={styles.row}>
      <img src={hotel.urlImage} alt={hotel.name + 'p'} className={styles.img}/>
      <p><a href={hotel.url} target='_blank'>{hotel.name}</a></p>
      <p>{hotel.price}</p>
      <p>{hotel.reviewAverage}</p>
      <p>{hotel.reviewCount}</p>
    </div>
  )
}

export default hotelsRow
