import React from 'react';
import styles from './HotelsTable.css';
import HotelsRow from './HotelsRow/HotelsRow'
import HotelClickSort from './HotelSortClick/HotelSortClick'

const labelKeys = [
  {label: '値段', k: 'price'},
  {label: 'レビュー', k: 'reviewAverage'},
  {label: 'レビュー件数', k: 'reviewCount'},
]

const hotelsTable = ({hotels, onSort, sortKey}) => {
  console.log(labelKeys);
  return (
    <div className={styles.hotelsTable}>
      <div className={styles.title}>
        <p>写真</p>
        <p>ホテル名</p>
        { labelKeys.map((item) => (
          <HotelClickSort
            label={item.label}
            sortKey={sortKey}
            onSort={(key)=>onSort(key)}
            k={item.k}/>
        )) }
      </div>
      {hotels.map((hotel) => (<HotelsRow key={hotel.id} hotel={hotel} />))}
    </div>
  )
}


export default hotelsTable
