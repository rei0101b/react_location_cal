import React from 'react';
import styles from './SearchForm.css';
import { connect } from 'react-redux';
// import { searchHotelByLocation } from '../../domain/HotelRepository';
import { setPlace, startSearch } from '../../actions';
import PropTypes from 'prop-types';


const searchForm = (props) => {
  return (
    <form
      className={styles.searchForm}
      onSubmit={(e) => {
        e.preventDefault();
        props.history.push(`/?place=${props.place}`);
        props.startSearch()
      }}
      >
      <input
        type="text"
        className={styles.input}
        value={props.place}
        onChange={(e)=> {
          e.preventDefault();
          props.setPlace(e.target.value);
        }}/>
      <input type="submit" className={styles.button} value="検索"/>
    </form>
  )
}

searchForm.propTypes = {
  place: PropTypes.string.isRequired,
  setPlace: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    place: state.place,
  }),
  { setPlace, startSearch },
)(searchForm);
