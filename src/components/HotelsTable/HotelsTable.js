import React from 'react';
import styles from './HotelsTable.css';
import HotelsRow from './HotelsRow/HotelsRow'
import HotelClickSort from './HotelSortClick/HotelSortClick'
import { connect } from 'react-redux';
import _ from 'lodash';

const labelKeys = [
  {label: '値段', k: 'price'},
  {label: 'レビュー', k: 'reviewAverage'},
  {label: 'レビュー件数', k: 'reviewCount'},
]

const hotelsTable = ({hotels, onSort, sortKey}) => {
  return (
    <div className={styles.hotelsTable}>
      <div className={styles.title}>
        <p>写真</p>
        <p>ホテル名</p>
        { labelKeys.map((item) => (
          <HotelClickSort
            label={item.label}
            sortKey={item.k}
            key={item.k}
          />
        )) }
      </div>
      {hotels.map((hotel) => (<HotelsRow key={hotel.id} hotel={hotel} />))}
    </div>
  )
}

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

export default connect(
  state => ({
    hotels: sortedHotels(state.hotels, state.sortKey),
  }))(hotelsTable);
