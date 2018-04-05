import { combineReducers } from 'redux';
import queryString from 'query-string';

const place = (state = getPlaceParams() || '東京タワー', action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      return action.place;
    default:
    return state;
  }
};

const getPlaceParams = () => {
  const params = queryString.parse(window.location.search);
  const place = params.place
  if (place && place.length > 1) {
    return place
  }
  return null;
}

const geocodeResult = (state = {
  address: '',
  lat: 35.6585805,
  lng: 139.7454329,
}, action) => {
  switch (action.type) {
    case 'GEOCODE_FETCHED':
      return action.geocode;
    case 'CHANGE_ERROR_MESSAGE':
      return (
        {
          address: action.message,
          lat: 0,
          lng: 0,
        }
      )
    default:
      return state;
  }
}

const hotels = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_HOTELS':
      return action.hotels;
    default:
    return state;
  }
};

const sortKey = (state = 'state', action) => {
  switch (action.type) {
    case 'CHANGE_SORT_KEY':
      return action.sortKey;
    default:
    return state;
  }
};

export default combineReducers({ place, geocodeResult, hotels, sortKey })
