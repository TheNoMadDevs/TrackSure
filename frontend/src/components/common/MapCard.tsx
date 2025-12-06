import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Add custom truck icon styles only once
if (!document.getElementById("truck-icon-styles")) {
  const style = document.createElement("style");
  style.id = "truck-icon-styles";
  style.innerHTML = `
    .custom-truck-icon {
      background: transparent !important;
      border: none !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .custom-truck-icon span {
      font-size: 48px;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
    }
  `;
  document.head.appendChild(style);
}

// Create custom truck emoji icon
const createTruckIcon = () => {
  return L.divIcon({
    html: "<span>🚚</span>",
    className: "custom-truck-icon",
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48],
  });
};

// Component to handle map center updates
const MapUpdater: React.FC<{ center: LatLngExpression }> = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom(), {
      animate: true,
      duration: 1,
    });
  }, [center, map]);

  return null;
};

interface MapLocation {
  position: LatLngExpression;
  popupText: string;
  icon?: "origin" | "destination" | "current";
}

interface MapCardProps {
  center: LatLngExpression;
  popupText?: string;
  locations?: MapLocation[];
  pathHistory?: LatLngExpression[];
}

const MapCard: React.FC<MapCardProps> = ({
  center,
  popupText = "Shipment Location",
  locations = [],
  pathHistory = [],
}) => {
  const truckIcon = createTruckIcon();

  // If no locations provided, create a default location
  const displayLocations =
    locations.length > 0 ? locations : [{ position: center, popupText }];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Shipment Location & Route</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[300px]">
          <MapContainer
            center={center}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <MapUpdater center={center} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Draw path history */}
            {pathHistory.length > 1 && (
              <Polyline
                positions={pathHistory}
                color="#2563eb"
                weight={4}
                opacity={0.7}
              />
            )}

            {/* Show markers */}
            {displayLocations.map((location, index) => (
              <Marker key={index} position={location.position} icon={truckIcon}>
                <Popup>{location.popupText}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapCard;
