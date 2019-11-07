import React from 'react'
import GoogleMapReact from 'google-map-react'

const MapComponentShow = (props) => {
  
  let latitude = 0
  let longitude = 0

  if (props.latitude) {
    latitude = props.latitude
  }

  if (props.longitude) {
    longitude = props.longitude
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCBkb1mdrCRYGHyIkBGZ9hQhXaETDvbqUU' }}
          defaultCenter={{
            lat: 0,
            lng: 0
          }}
          center={{
            lat: latitude,
            lng: longitude
          }}
          defaultZoom={ 10 }
        >
      </GoogleMapReact>
    </div>
  )
}

export default MapComponentShow
