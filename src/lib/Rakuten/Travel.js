import axios from 'axios';

const URL_BASE = 'https://app.rakuten.co.jp/services/api/Travel/';
const SIMPLE_HOTEL_SEARCH_ENDPONT = `${URL_BASE}/SimpleHotelSearch/20170426`

// const simpleHotelSearch = (params) => (
//   axios.get(SIMPLE_HOTEL_SEARCH_ENDPONT, {params})
// )
//
// export default simpleHotelSearch;

export default {
  simpleHotelSearch: params =>
    axios.get(SIMPLE_HOTEL_SEARCH_ENDPONT, {params}),
}
