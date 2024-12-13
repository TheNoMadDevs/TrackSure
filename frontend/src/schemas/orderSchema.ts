interface Order {
    id: string;
    consumerID: string;
    supplierID: string;
    product: string; // productID
    quantity: number;
    price: number;
    status: "pending" | "confirmed" | "cancelled";
    createdAt: number; // timestamp
    shipmentID: string; // Reference to the shipment
}

export type { Order };
