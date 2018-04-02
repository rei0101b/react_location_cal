import React from 'react'



const hotelSortClick = ({ label, sortKey, onSort, k}) => (
  <p onClick={()=>onSort(k)}>{console.log({ label, sortKey, onSort, k})}{label}{sortKey === k ? '▽' : ''}</p>
)

export default hotelSortClick
