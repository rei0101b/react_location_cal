import React, { Component } from 'react';
import './SearchPage.scss';
import styles from './SearchPage.scss';
import SearchFrom from '../../components/SearchFrom/SearchFrom';
import GeocodeResult from '../../components/GeocodeResult/GeocodeResult'
import Map from '../../components/Map/Map'
import { connect } from 'react-redux';

import HotelsTable from '../../components/HotelsTable/HotelsTable';

import PropTypes from 'prop-types';
import { startSearch } from '../../actions'

class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch(startSearch());
  }

  render() {
    const { address, lat, lng } = this.props.geocodeResult;
    return (
      <div className={styles.app}>
        <div>
          <h1 className={styles.title}>緯度経度検索</h1>
        </div>
        <SearchFrom history={this.props.history}/>
        <GeocodeResult address={address} lat={lat} lng={lng} />
        <div className={styles.result}>
          <Map lat={lat} lng={lng}/>
          <HotelsTable />
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  geocodeResult: PropTypes.shape({
    address: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
}

const mapStateToProps = (state) => ({
  geocodeResult: state.geocodeResult,
  hotels: state.hotels,
})



export default connect(mapStateToProps)(SearchPage);
