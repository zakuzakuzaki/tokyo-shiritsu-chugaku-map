import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { School } from '../../types/school';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

interface MapProps {
  schools: School[];
}

export default function Map({ schools }: MapProps) {
  return (
    <MapContainer center={[35.6895, 139.6917]} zoom={11} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {schools.map((s) => (
        <Marker key={s.id} position={[s.lat, s.lng]}>
          <Popup>
            <div>
              <h2 className="font-bold">{s.name}</h2>
              <p>{s.address}</p>
              <p>偏差値: {s.hensachi}</p>
              <p>{s.gender === 'coed' ? '共学' : s.gender === 'boys' ? '男子校' : '女子校'}</p>
              <p>学費(概算/年): {s.tuition.toLocaleString()}円</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
