import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

interface MapCardProps {
  center: LatLngExpression;
  popupText: string;
}

const MapCard: React.FC<MapCardProps> = ({ center, popupText }) => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Shipment Locations</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[300px]">
          <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
              <Popup>{popupText}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapCard;