import React, {PropTypes} from 'react';
import styles from './Map.css';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const InnerMap = withGoogleMap((props) => {
  return(
    <GoogleMap
      defaultZoom={20}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      center={props.position}
    >
    <Marker {...props.marker} />
    </GoogleMap>
  )
})

const Map = ({ lat, lng }) => {
  const position = { lat, lng}
  return (
    <InnerMap
      containerElement={(<div />)}
      mapElement={(<div className={styles.innerMap}/>)}
      position={position}
      marker={{position}}
    />
  )
}

export default Map

// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCpFPY0GL2Rfi0WVTr83difrXs1jJUno4s
