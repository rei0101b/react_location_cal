import axios from 'axios';

const geocodeEndPont = 'https://maps.googleapis.com/maps/api/geocode/json';
const key = 'AIzaSyCpFPY0GL2Rfi0WVTr83difrXs1jJUno4s';


export const geocode = (place) => {
  return (
    axios
      .get(geocodeEndPont + '?address=' + place + '&key=' + key)
      .then((results) => {
        const data = results.data;
        const status = data.status
        if (status === 'ZERO_RESULTS') {
          const geocode = {}
          return { geocode, status }
        }
        const result = data.results[0];
        const location = result.geometry.location;
        const geocode = {
          address: result.formatted_address,
          lat: location.lat,
          lng: location.lng,
        }
        return { geocode, status }
      })
  )
}

export const reversGeocode = () => null;
