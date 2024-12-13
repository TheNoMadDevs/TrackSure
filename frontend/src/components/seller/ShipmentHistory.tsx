const ShipmentHistory = () => {
  const shipmentHistory = [
    {
      shipmentId: "SH001",
      orderId: "ORD123",
      productName: "Wireless Headphones",
      transporterId: "TR789",
      status: "Delivered",
      date: "12-1-2024"
    },
    {
      shipmentId: "SH002",
      orderId: "ORD124",
      productName: "Smart Watch",
      transporterId: "TR790",
      status: "In Transit",
      date: "12-1-2024"
    },
    {
      shipmentId: "SH003",
      orderId: "ORD125",
      productName: "Laptop",
      transporterId: "TR791",
      status: "Pending",
      date: "12-1-2024"
    },
    {
      shipmentId: "SH004",
      orderId: "ORD126",
      productName: "Smartphone",
      transporterId: "TR792",
      status: "Cancelled",
      date: "12-1-2024"
    },
  ];


  return (
    <div className="w-full max-w-3xl h-full">
      <div className="border-b p-4">
        <h2 className="text-xl font-bold">Shipment History</h2>
      </div>
      <div className="p-4">
        <div className="h-full w-full">
          <div className="space-y-4">
            {shipmentHistory.map((shipment) => (
              <div
                key={shipment.shipmentId}
                className="flex flex-col space-y-2 w-full rounded-lg border p-4 shadow-sm"
              >
                <div className="flex justify-between w-full">
                  <span className="font-semibold">
                    Shipment ID: {shipment.shipmentId}
                  </span>
                  <span
                    className={`px-2 py-1 rounded text-white bg-blue-700 `}
                  >
                    {shipment.date}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  Order ID: {shipment.orderId}
                </div>
                <div className="font-medium">{shipment.productName}</div>
                <div className="text-sm text-gray-500">
                  Transporter ID: {shipment.transporterId}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipmentHistory;