import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import styles from './App.scss';
import SearchFrom from './containers/SearchFrom/SearchFrom'
import GeocodeResult from './components/GeocodeResult/GeocodeResult'
import Map from './components/Map/Map'
import axios from 'axios';

const geocodeEndPont = 'https://maps.googleapis.com/maps/api/geocode/json';
const key = 'AIzaSyCpFPY0GL2Rfi0WVTr83difrXs1jJUno4s';

class App extends Component {
  state = {
    geocode: {
        address: 'test',
        lat: 'ss',
        lng: 'test',
      }
  }

  handleGetGeoMap = (place) => {
    console.log(place);
    axios
      .get(geocodeEndPont + '?address=' + place + '&key=' + key)
      .then((results) => {
        console.log(results);
        const data = results.data;
        const result = data.results[0];
        const location = result.geometry.location;
        this.setState({
          geocode: {
            address: result.formatted_address,
            lat: location.lat,
            lng: location.lng,
          }
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  searchFromHandler(place) {
    this.handleGetGeoMap(place)
  }

  render() {
    const {address, lat, lng} = this.state.geocode
    return (
      <div className={styles.app}>
        <Map />
        <div>
          <h1 className={styles.title}>緯度経度検索</h1>
        </div>
        <SearchFrom
          onClick={(place) => this.searchFromHandler(place)}
        />
        <GeocodeResult address={address} lat={lat} lng={lng} />
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import axios from 'axios';
//
// const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       place: '通天閣', //ここに好きな場所を指定。
//     };
//   }
//   handleGetLatAndLng() {
//     // Google Maps APIが指定した必須パラメータ(この場合はaddress)をparamsに渡す。
//     axios
//       .get(GEOCODE_ENDPOINT, { params: { address: this.state.place } })
//       .then((results) => {
//       // 以下のGoogle API のレスポンスの例を元に欲しいデータを取得
//         const data = results.data;
//         const result = data.results[0];
//         const location = result.geometry.location;
//         this.setState({
//           address: result.formatted_address,
//           lat: location.lat,
//           lng: location.lng,
//         });
//       },
//       )
//       .catch(() => {
//         console.log('通信に失敗しました。');
//       });
//   }
//
//   render() {
//     return (
//       <div className="app">
//         <h1 className="app-title">緯度軽度検索</h1>
//         <p> 土地名: {this.state.place} </p>
//         <p> 経度: {this.state.lat}</p>
//         <p> 経度: {this.state.lng}</p>
//         <input
//           type="button"
//           value="経度・緯度を検索"
//           onClick={() => this.handleGetLatAndLng()}
//         />
//       </div>
//     );
//   }
// }
//
// export default App;
