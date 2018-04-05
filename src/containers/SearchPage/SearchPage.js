import React, { Component } from 'react';
import _ from 'lodash';
import './SearchPage.scss';
import styles from './SearchPage.scss';
import SearchFrom from '../../components/SearchFrom/SearchFrom';
import GeocodeResult from '../../components/GeocodeResult/GeocodeResult'
import Map from '../../components/Map/Map'
import { connect } from 'react-redux';

import HotelsTable from '../../components/HotelsTable/HotelsTable';

import PropTypes from 'prop-types';
import queryString from 'query-string';

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

class SearchPage extends Component {
  state = {
    place: this.getPlaceParams() || '',
    geocode: {
        address: '',
        lat: 'ss',
        lng: 'test',
      },
      sortKey: 'price',
      hotels: [
      ],
  }

  componentDidMount() {
    // const place = this.getPlaceParams();
    // if (place) {
    //   this.startSearch(place);
    // }
  }

  componentWillunmount() {
  }

  // searchFromHandler(place) {
  //   this.props.history.push(`/?place=${place}`);
  //   this.startSearch(place);
  // }

  getPlaceParams() {
    const params = queryString.parse(this.props.location.search);
    const place = params.place
    if (place && place.length > 1) {
      return place
    }
    return null;
  }

  // startSearch = (place) => {
  // }

  handleSortKeyChange = (sortKey) => {
    this.setState({
      sortKey: sortKey,
      hotels: sortedHotels(this.state.hotels, sortKey)})
  }

  render() {
    const { address, lat, lng } = this.props.geocodeResult;
    return (
      <div className={styles.app}>
        <div>
          <h1 className={styles.title}>緯度経度検索</h1>
        </div>
        <SearchFrom />
        <GeocodeResult address={address} lat={lat} lng={lng} />
        <div className={styles.result}>
          <Map lat={lat} lng={lng}/>
          {/*<HotelsTable
            hotels={this.state.hotels}
            onSort={(sortKey) => this.handleSortKeyChange(sortKey)}
            sortKey={this.state.sortKey}/>
          */}
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  // history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  geocodeResult: PropTypes.shape({
    address: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
}

const mapStateToProps = (state) => ({
  geocodeResult: state.geocodeResult,
})



export default connect(mapStateToProps)(SearchPage);
