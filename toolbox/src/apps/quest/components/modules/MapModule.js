import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import QuestModalBlock from '../blocks/QuestModalBlock';

class MapModule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            imgUrl: "",
        }
    }

    handleOpen(imgUrl) {
        if (this.state.show === false) {
            this.setState({
                show: true,
                imgUrl: imgUrl,
            });
        }
    }

    handleClose() {
        this.setState({
            show: false,
            imgUrl: "",
        })
    }

    leafletTilelayer() {
        return (
            <TileLayer
                url={process.env.PUBLIC_URL + "/images/maptiles/{z}/{x}/{y}.png"}
            />
        );
    }

    leafletMarkers() {
        if (this.props.choicedQuest) {
            let markers = this.props.choicedQuest.markers.map((point, idx) => {
                return this.marker(point, idx);
            });
            return markers;
        }
        else {
            return;
        }
    }

    marker(point, idx) {
        let markerPosition = [point.latitude, point.longtitude];
        return (
            <Marker position={markerPosition} key={idx}>
                <Popup>
                    <a onClick={() => this.handleOpen(point.imageUrl)} className="point-marker">
                        {point.place}
                    </a>
                </Popup>
            </Marker>
        );
    }

    styleMap() {
        /* あとから画面サイズ変えられると無理だけどまあよし */
        if (window.innerWidth < 768) {
            /* スマホ */
            return {
                height: '100vw',
            }
        }
        else {
            /* パソコン */
            return {
                height: '90vh',
            }
        }
    }

    render() {
        return (
            <div>
                <MapContainer center={[0, 0]} zoom={1} maxZoom={3} scrollWheelZoom={false} style={ this.styleMap() }>
                    { this.leafletTilelayer() }
                    { this.leafletMarkers()}
                </MapContainer>
                <QuestModalBlock
                    show={this.state.show}
                    imgUrl={this.state.imgUrl}
                    handleClose={() => this.handleClose()}
                />
            </div>
        );
    }
}

export default MapModule;