import React, { Component } from 'react';
import './App.scss';
import styles from './App.scss';
import SearchFrom from './containers/SearchFrom/SearchFrom'
import GeocodeResult from './components/GeocodeResult/GeocodeResult'
import Map from './components/Map/Map'
import axios from 'axios'
import { geocode } from './domain/Geocoder'
import HotelsTable from './components/HotelsTable/HotelsTable';
import { searchHotelByLocation } from './domain/HotelRepository';

class App extends Component {
  state = {
    geocode: {
        address: '',
        lat: 'ss',
        lng: 'test',
      },
      hotels: [
      ]
  }

  searchFromHandler(place) {
    geocode(place)
      .then((geocode) => {
        this.setState({
          geocode: geocode
        })
        searchHotelByLocation(geocode)
          .then((hotels) => {
            console.log(hotels);
            this.setState({
              hotels: hotels
            })
          })
      })
  }

  render() {
    const {address, lat, lng} = this.state.geocode
    console.log(this.state.hotels);
    return (
      <div className={styles.app}>
        <div>
          <h1 className={styles.title}>緯度経度検索</h1>
        </div>
        <SearchFrom
          onClick={(place) => this.searchFromHandler(place)}
        />
        <GeocodeResult address={address} lat={lat} lng={lng} />
        <div className={styles.result}>
          <Map lat={lat} lng={lng}/>
          <HotelsTable hotels={this.state.hotels}/>
        </div>
      </div>
    );
  }
}

export default App;
