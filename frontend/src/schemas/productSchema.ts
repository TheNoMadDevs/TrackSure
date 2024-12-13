interface TemperatureRange {
    min: number;
    max: number;
}

interface HumidityRange {
    min: number;
    max: number;
}

interface Product {
    productID: string;
    name: string;
    supplierID: string;
    price: number;
    quantity: number;
    temperatureRange: TemperatureRange;
    humidityRange: HumidityRange;
    expiryDate: number;
    createdAt: number;
    updatedAt: number;
    imageURL: string;
}

export type { TemperatureRange, HumidityRange, Product };
  