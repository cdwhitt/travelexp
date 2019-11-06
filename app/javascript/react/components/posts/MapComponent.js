import React from 'react'
import GoogleMapReact from 'google-map-react'

const MapComponent = (props) => {

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCBkb1mdrCRYGHyIkBGZ9hQhXaETDvbqUU' }}
          defaultCenter={{
            lat:42.40,
            lng:-71.38
          }}
          defaultZoom={ 10 }
        >
      </GoogleMapReact>
    </div>
  )
}

export default MapComponent
