import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { google } from './.config'

const Map = (props) => {

  const [myMarkers, setMarkers] = React.useState([]);
  const [mapReference, setMapReference] = useState(null);
  const [mapsReference, setMapsReference] = useState(null);
  const [center, setCenter] = useState({ lat: 39.82, lng: -98.57 });
  const [start, setStart] = useState('');

  useEffect(() => {
    setMarkers(props.parks);
    setCenter({ lat: 39.82, lng: -98.57 });
  }, [props.parks])

  const handleStart = event => {
    setStart(event.target.value);
  }

  const onKeyUp = event => {
    if (event.keyCode === 13) {
      handleDirections(start);
      setStart('');
    }
  }

  const handleDirections = (start) => {
    const waypnts = [];

    console.log(myMarkers);

    myMarkers.forEach((park, index) => {
      if (index === myMarkers.length - 1) {
        return;
      }
      waypnts.push({
        location: park.name,
        stopover: true
      })
    });

    console.log('WayPoints: ', waypnts, 'Length: ', waypnts.length);

    const directionsService = new mapsReference.DirectionsService();
    const directionsDisplay = new mapsReference.DirectionsRenderer();
    directionsService.route({
      origin: start,
      destination: myMarkers[myMarkers.length - 1].name,
      waypoints: waypnts,
      travelMode: 'DRIVING',
      optimizeWaypoints: true,
    }, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        //
        const routePolyline = new mapsReference.Polyline({
          path: response.routes[0].overview_path
        });
        routePolyline.setMap(mapReference);
      } else {
        window.alert('Directions request failed due to ' + status);
        }
      });
  };

  return (
    <div>
      <div>
        <label>
          Where Are You Starting From?
          <br />
          <br />
          <input type="text" placeholder="Starting Point" value={start} onChange={handleStart} onKeyUp={onKeyUp}/>
        </label>
        <button onClick={() => {
          handleDirections(start);
          setStart('');
          }}>Get Route!</button>
      </div>
      <br />
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: google.MAPS_API_KEY }}
          center={center}
          zoom={5}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            setMapReference(map);
            setMapsReference(maps);
          }}
        >
          {myMarkers.map(park => (
            <Marker
            key={park.url}
            lat={park.lat}
            lng={park.lng}
            name={park.name}
            searchName={park.searchName}
            url={park.url}
            desc={park.description}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;

