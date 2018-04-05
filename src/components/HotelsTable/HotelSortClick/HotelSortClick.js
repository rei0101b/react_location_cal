import React from 'react'
import { connect } from 'react-redux';
import { setSortKey } from '../../../actions';

const hotelSortClick = (props) => (
  <p onClick={()=>props.setSortKey(props.sortKey)}>
    {props.label}{props.isSelected ? '▽' : ''}
  </p>
)

export default connect(
  (state, ownProps) => ({
    isSelected: ownProps.sortKey === state.sortKey,
  }),
  { setSortKey }
)(hotelSortClick);
