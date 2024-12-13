import { Timestamp } from "firebase/firestore";

interface Order {
    orderID: string;
    consumerID: string;
    supplierID: string;
    product: string; // productID
    quantity: number;
    price: number;
    status: "pending" | "confirmed" | "cancelled";
    createdAt: Timestamp; // timestamp
    shipmentID: string; // Reference to the shipment
}

export type { Order };
