import { combineReducers } from 'redux';

const place = (state = '東京タワー', action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      return action.place;
    default:
    return state;
  }
};

const geocodeResult = (state = {
  address: '',
  lat: 35.6585805,
  lng: 139.7454329,
}, action) => {
  switch (action.type) {
    case 'GEOCODE_FETCHED':
      return action.geocode;
    default:
      return state;
  }
}

export default combineReducers({ place, geocodeResult })
