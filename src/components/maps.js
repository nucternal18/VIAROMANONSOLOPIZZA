import React, { useState } from "react";
// import ReactMapGL, {Marker} from "react-map-gl";

import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

const Maps = () => {
  const [selected, setSelected] = useState(false);


  return <GoogleMap
  defaultZoom={18}
  defaultCenter={{ lat: 45.723980, lng: 8.630950}}
  >
      <Marker position={{ lat: 45.723980, lng: 8.630950 }} onClick={() => { setSelected(true) }} />
      {selected && (
          <InfoWindow position={{ lat: 45.723980, lng: 8.630950 }} onCloseClick={() => {
              setSelected(false)
          }}>
              <div>
                  <h1 className="p-2 text-xl font-bold">via ROMA non solo pizza</h1>
                  <p className='mb-4 font-thin'>
            Via Roma, 40, 21018 Sesto Calende VA, Italy
          </p>
              </div>
          </InfoWindow>
      )}
  </GoogleMap>
};

const WrappedMap = withScriptjs(withGoogleMap(Maps));

export default WrappedMap;
