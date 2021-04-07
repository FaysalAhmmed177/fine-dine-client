import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '500px',
    height: '400px'
};

const location = {
    lat: 23.752943,
    lng: 90.377800
};
const onLoad = marker => {
    console.log('marker: ', marker)
}


function OrderComplete() {
    return (
        <div className="container">
            <div className="mt-5">
                <LoadScript
                    googleMapsApiKey="AIzaSyDbJnFH2ogZD5EEOwEKnIMT1md9lz6J7go"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={location}
                        zoom={10}
                    >
                        <Marker
                            onLoad={onLoad}
                            position={location}
                        />
                    </GoogleMap>
                </LoadScript>
            </div>
            <div>

            </div>
        </div>
    )
}

export default React.memo(OrderComplete)