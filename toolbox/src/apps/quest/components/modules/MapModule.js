import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class MapModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const position = [0, 0];
        console.log(process.env.PUBLIC_URL + "/images/map.png");
        return (
            <MapContainer center={position} zoom={0} scrollWheelZoom={false} style={{height: '90vh'}}>
                <TileLayer
                    url={process.env.PUBLIC_URL + "/images/maptiles/{z}/{x}/{y}.png"}
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
          </MapContainer>
        );
    }
}

export default MapModule;