import React from "react"
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const Map: React.FC = () => {
    return (
        <MapContainer center={[-35.943482124865305, 156.57943339542038]} zoom={4} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                url="https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWljaGFlbHJhdXNjaCIsImEiOiJja3N1MTk1a3IxYjJ0MndsZXlwNjI2aG1uIn0.nImQ0rBdYpQmt91DFNpmTw"
            />
        </MapContainer>
    )
}

export default Map;