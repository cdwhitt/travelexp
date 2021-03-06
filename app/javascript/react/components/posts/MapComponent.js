import React from 'react'
import GoogleMapReact from 'google-map-react'

const MapComponent = (props) => {

  let latitude = 0
  let longitude = 0

  if (props.latitude && props.longitude) {
    latitude = props.latitude
    longitude = props.longitude
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCBkb1mdrCRYGHyIkBGZ9hQhXaETDvbqUU' }}
          defaultCenter={{
            lat: latitude,
            lng: longitude
          }}
          defaultZoom={ 10 }
        >
      </GoogleMapReact>
    </div>
  )
}

export default MapComponent
