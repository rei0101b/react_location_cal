import Rakuten from '../lib/Rakuten'
const RAKUTEN_APP_IDD = '1042361457407416182'

export const searchHotelByLocation = ({lat, lng}) => {
  console.log({lat, lng});
  const params = {
    applicationId: RAKUTEN_APP_IDD,
    datumType: 1,
    latitude: lat,
    longitude: lng,
  }
  return(
    Rakuten.Travel.simpleHotelSearch(params)
     .then((result) => {
       return result.data.hotels.map((hotelObject) => {
         const basicInfo = hotelObject.hotel[0].hotelBasicInfo
         return {
           id: basicInfo.hotelNo,
           name: basicInfo.hotelName,
           url: basicInfo.hotelInformationUrl,
           urlImage: basicInfo.hotelImageUrl,
           price: basicInfo.hotelMinCharge,
           reviewAverage: basicInfo.reviewAverage,
           reviewCount: basicInfo.reviewCount,
         }
       })
     })
   )
}
