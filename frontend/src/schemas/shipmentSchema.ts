interface Location {
    latitude: string;
    longitude: string;
}
  
  interface TrackingDetails {
    currentLocation: Location;
    temperature: number;
    humidity: number;
    lastUpdated: number; // timestamp
}
  
interface Shipment {
    id: string;
    orderID: string;
    transporterID: string;
    source: string;
    destination: string;
    trackingDetails: TrackingDetails;
    status: "pending" | "in-transit" | "delivered"; 
    deliveryDate: number; // timestamp
    createdAt: number; // timestamp
}

export type { Location, TrackingDetails, Shipment };
