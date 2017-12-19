import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


class gmap extends React.Component {
  render() {

    const MapWithAMarker = withGoogleMap(props =>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 48.864716, lng: 2.349014 }}
      >
        <Marker
          position={{ lat: 48.864716, lng: 2.349014 }}
        />
      </GoogleMap>
    );

      return(
        <MapWithAMarker
        containerElement={<div style={{ height: '40vh' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    );
}
}

export default gmap;
