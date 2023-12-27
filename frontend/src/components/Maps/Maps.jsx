import React from 'react';
import { APIProvider, Map, Marker, Pin, InfoWindow } from '@vis.gl/react-google-maps';

const Maps = () => {
    const position = { lat: 19.0760, lng: 72.8777 };
    const borivali = { lat: 19.2307, lng: 72.8567 };
    const arr = [{ lat: 19.2307, lng: 72.8567 }, { lat: 19.230, lng: 72.856 }, { lat: 19.2311, lng: 72.8569 }]
    return (
        <APIProvider apiKey='AIzaSyA1KHEQejw-DRumfep9wSv4RZehdeUM8Ss'>
            <div style={{ height: "100vh" }}>
                <Map zoom={11} center={position}>
                    {
                        arr.map((item) => {
                            return <Marker position={item} />
                        })
                    }
                </Map>
            </div>
        </APIProvider>
    );
}

export default Maps;

//apiKey: 'AIzaSyA1KHEQejw-DRumfep9wSv4RZehdeUM8Ss',
