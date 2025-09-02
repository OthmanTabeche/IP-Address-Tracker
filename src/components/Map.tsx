import { type JSX, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
    latitude: number
    longitude: number
}

// Component to update map center when coordinates change
const MapUpdater = ({ latitude, longitude }: MapProps): null => {
    const map = useMap();
    
    useEffect(() => {
        map.setView([latitude, longitude], 12);
    }, [map, latitude, longitude]);
    
    return null;
};

const Map = ({ latitude, longitude }: MapProps):JSX.Element => {
    const position: [number, number] = [latitude, longitude]

    return (
        <div className="w-full h-96 relative">
            <MapContainer 
                center={position} 
                zoom={12} 
                scrollWheelZoom={false}
                key={`${latitude}-${longitude}`}
            >
                <MapUpdater latitude={latitude} longitude={longitude} />
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