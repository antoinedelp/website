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
        defaultCenter={{ lat:  48.831248, lng: 2.217408 }}
      >

        <Marker
          position={{ lat:   48.831248, lng: 2.217408 }}
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
