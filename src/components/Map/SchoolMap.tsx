import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { School, SchoolType } from '../../types/school';

interface SchoolMapProps {
  schools: School[];
  onSchoolSelect?: (school: School) => void;
}

const getMarkerIcon = (schoolType: SchoolType): Icon => {
  const iconColors = {
    '共学': '#3b82f6',
    '男子校': '#10b981', 
    '女子校': '#f59e0b'
  };

  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${iconColors[schoolType]}" width="24" height="24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    `)}`,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24]
  });
};

const SchoolMap: React.FC<SchoolMapProps> = ({ schools, onSchoolSelect }) => {
  const tokyoCenter: [number, number] = [35.6762, 139.6503];

  return (
    <div className="h-full w-full">
      <MapContainer
        center={tokyoCenter}
        zoom={11}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {schools.map((school) => (
          <Marker
            key={school.id}
            position={[school.latitude, school.longitude]}
            icon={getMarkerIcon(school.schoolType)}
            eventHandlers={{
              click: () => onSchoolSelect?.(school)
            }}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <h3 className="font-bold text-lg mb-2">{school.name}</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="font-semibold">住所:</span> {school.address}</p>
                  <p><span className="font-semibold">最寄り駅:</span> {school.nearestStation} (徒歩{school.walkingTime}分)</p>
                  <p><span className="font-semibold">種別:</span> {school.schoolType}</p>
                  <p><span className="font-semibold">偏差値:</span> {school.deviationValue}</p>
                  <p><span className="font-semibold">年間学費:</span> ¥{school.annualFee.toLocaleString()}</p>
                  {school.description && (
                    <p className="mt-2 text-gray-600">{school.description}</p>
                  )}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default SchoolMap;