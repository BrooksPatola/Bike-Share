import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import axios from 'axios';


const SimpleMap = (props: any) => {
  const sendGetRequest = () => {

    return axios({
      url: 'https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information',
      method: 'get'
    }).then(response => {
  
      console.log(response);
      return response.data;
    })
  };

  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {

    sendGetRequest().then(data => setItems(data.posts));

  }, []);

    const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
    const [zoom, setZoom] = useState(11);
    return (
 
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDgzdJamW7SttHqwhmPM5HH2mEtlKu-OEY' }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={getMapOptions}
        >
          <Marker
            lat={11.0168}
            lng={76.9558}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;