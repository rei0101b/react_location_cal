import React from 'react';
import styles from './SearchForm.css';
import { connect } from 'react-redux';
import { geocode } from '../../domain/Geocoder';
// import { searchHotelByLocation } from '../../domain/HotelRepository';
import { setPlace } from '../../actions';



const searchFrom = (props) => {
  return (
    <form
      className={styles.searchForm}
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(props.place)
      }}
      >
      <input
        type="text"
        className={styles.input}
        value={props.place}
        onChange={(e)=> {
          e.preventDefault();
          props.onPlaceChange(e.target.value);
        }}/>
      <input type="submit" className={styles.button} value="検索"/>
    </form>
  )
}


const mapStateToProps = (state) => ({
  place: state.place,
})

const mapDispatchToProps = (dispatch) => ({
  onPlaceChange: place => dispatch(setPlace(place)),
  onSubmit: (place) => {
    geocode(place)
      .then((geocode) => {
        dispatch({ type: 'GEOCODE_FETCHED', geocode: geocode });
        // this.setState({
        //   geocode: geocode,
        //   place: place
        // })
        // searchHotelByLocation(geocode)
        //   .then((hotels) => {
        //     this.setState({
        //       hotels: sortedHotels(hotels, this.state.sortKey)
        //     })
        //   })
      })

  }
})

export default connect(mapStateToProps, mapDispatchToProps)(searchFrom);
