import { geocode } from '../domain/Geocoder';
import { searchHotelByLocation } from '../domain/HotelRepository'

export const setPlace = place => dispatch => dispatch({ type: 'CHANGE_PLACE', place: place });

export const setErrorMessage = message => ({ type: 'CHANGE_ERROR_MESSAGE', message: message });

export const setHotels = hotels => dispatch => dispatch({ type: 'CHANGE_HOTELS', hotels: hotels });

export const setSortKey = sortKey => dispatch => dispatch({ type: 'CHANGE_SORT_KEY', sortKey: sortKey });

export const startSearch = () => (dispatch, getState) => {
  geocode(getState().place)
    .then(({ geocode, status }) => {
      switch (status) {
        case 'OK':
          dispatch({ type: 'GEOCODE_FETCHED', geocode: geocode });
          return searchHotelByLocation(geocode);
        case 'ZERO_RESULTS':
          dispatch(setErrorMessage('検索結果が見つかりませんでした。'))
          break;
        default: {
          dispatch(setErrorMessage('エラーが発生しました。'))
        }
      }
      })
      .then((hotels) => {
        dispatch(setHotels(hotels));
      })
      .catch(() => {
        dispatch(setErrorMessage('通信に失敗しました。'))
      })
};
