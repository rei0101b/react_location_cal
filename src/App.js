import React, { Component } from 'react';
import './App.scss';
import styles from './App.scss';
import SearchFrom from './containers/SearchFrom/SearchFrom'
import GeocodeResult from './components/GeocodeResult/GeocodeResult'
import Map from './components/Map/Map'
import axios from 'axios'
import { geocode } from './domain/Geocoder'


const geocodeEndPont = 'https://maps.googleapis.com/maps/api/geocode/json';
const key = 'AIzaSyCpFPY0GL2Rfi0WVTr83difrXs1jJUno4s';

class App extends Component {
  state = {
    geocode: {
        address: '',
        lat: 'ss',
        lng: 'test',
      }
  }

  searchFromHandler(place) {
    geocode(place)
      .then((geocode) => {
        this.setState({
          geocode: geocode
        })
      })
  }

  render() {
    const {address, lat, lng} = this.state.geocode
    return (
      <div className={styles.app}>
        <div>
          <h1 className={styles.title}>緯度経度検索</h1>
        </div>
        <SearchFrom
          onClick={(place) => this.searchFromHandler(place)}
        />
        <GeocodeResult address={address} lat={lat} lng={lng} />
        <Map lat={lat} lng={lng}/>
      </div>
    );
  }
}

export default App;
