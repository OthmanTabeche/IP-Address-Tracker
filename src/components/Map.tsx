import { type JSX, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
    latitude: number
    longitude: number
}

const Map = ({ latitude, longitude }: MapProps):JSX.Element => {
    useEffect(() => {
        // Force a re-render of the map when component mounts
        const mapContainer = document.querySelector('.leaflet-container');
        if (mapContainer) {
            (mapContainer as any)._leaflet_map?.invalidateSize();
        }
    }, [latitude, longitude]);

    const position: [number, number] = [latitude, longitude]


    return (
        <div className="w-full h-96 relative">
            <MapContainer 
                center={position} 
                zoom={4} 
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        This is your location
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map