import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
  getFirestore, 
  collection, 
  query, 
  where, 
  getDocs, 
  doc, 
  getDoc 
} from "firebase/firestore";
import app from "@services/firebase";
import { Shipment } from "@schemas/shipmentSchema";
import { Product } from "@schemas/productSchema";
import { useAuthUser } from "@hooks/useAuthUser";
import HumidityCard from '@components/common/HumidityCard';
import TemperatureCard from "@components/common/TemperatureCard";
import AlertsCard from "@components/common/AlertsCard";
import MapCard from "@components/common/MapCard";
import { ArrowLeft } from "lucide-react";

const TrackingPage = () => {
  const db = getFirestore(app);
  const navigate = useNavigate();
  const { shipmentId } = useParams<{ shipmentId?: string }>();
  const { userInfo } = useAuthUser();

  const [tracking, setTracking] = useState<Shipment[]>([]);
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);
  const [product, setProduct] = useState<Product | null>(null);

  const fetchShipments = async () => {
    try {
      const trackingQuery = query(
        collection(db, "shipments"),
        where("status", "in", ["pending", "in-transit"]),
        where("sellerID", "==", userInfo?.uid)
      );
      const querySnapshot = await getDocs(trackingQuery);
      const fetchedShipments: Shipment[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedShipments.push(data as Shipment);
      });
      setTracking(fetchedShipments);

      // If there's a shipmentId in the URL, fetch its details
      if (shipmentId) {
        const shipmentRef = doc(db, "shipments", shipmentId);
        const shipmentSnap = await getDoc(shipmentRef);

        if (shipmentSnap.exists()) {
          const shipmentData = shipmentSnap.data() as Shipment;
          setSelectedShipment(shipmentData);

          // Fetch product details
          if (shipmentData.orderID) {
            const productRef = doc(db, "products", shipmentData.orderID);
            const productSnap = await getDoc(productRef);

            if (productSnap.exists()) {
              setProduct(productSnap.data() as Product);
            }
          }
        }
      }
    } catch (error) {
      console.error("Error fetching shipments: ", error);
    }
  };

  useEffect(() => {
    fetchShipments();
  }, [shipmentId, userInfo?.uid]);

  const handleShipmentClick = (shipmentID: string) => {
    navigate(`/seller/tracking/${shipmentID}`);
  };

  const handleBackClick = () => {
    shipmentId ? navigate("/seller/tracking") : navigate(-1);
  };

  // Render shipment list
  const renderShipmentList = () => (
    <div className="space-y-4">
      {tracking.length > 0 ? (
        tracking.map((shipment) => (
          <div
            key={shipment.shipmentID}
            onClick={() => handleShipmentClick(shipment.shipmentID)}
            className="flex flex-col space-y-2 w-full rounded-lg border
            hover:bg-slate-900 p-4 shadow-sm cursor-pointer transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-between items-center w-full">
              <span className="font-semibold text-white">
                Shipment ID: {shipment.shipmentID}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
              <div>Order ID: {shipment.orderID}</div>
              <div>Transporter ID: {shipment.transporterID}</div>
              <div className="text-right">
                Status: 
                <span className={`ml-2 ${
                  shipment.status === 'pending' ? 'text-yellow-600' : 
                  shipment.status === 'in-transit' ? 'text-blue-600' : 
                  'text-green-600'
                }`}>
                  {shipment.status}
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 py-4">No shipments to track.</p>
      )}
    </div>
  );

  // Render shipment details
  const renderShipmentDetails = () => {
    if (!selectedShipment) return null;
    
    const tempData = [
      { time: "00:00", temp: 2 },
      { time: "04:00", temp: 3 },
      { time: "08:00", temp: 5 },
      { time: "12:00", temp: 4 },
      { time: "16:00", temp: 3 },
      { time: "20:00", temp: 2 },
    ];
    
    const humidData = [
      { time: "00:00", humidity: 70 },
      { time: "04:00", humidity: 72 },
      { time: "08:00", humidity: 75 },
      { time: "12:00", humidity: 73 },
      { time: "16:00", humidity: 71 },
      { time: "20:00", humidity: 70 },
    ];

    const alerts = ['Humidity Less than 80%', 'Temperature More than 20']

    return (
        <div className="space-y-6">
          {/* Shipment Information */}
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-white border-b pb-2">Shipment Information</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Shipment ID", value: selectedShipment.shipmentID },
                { label: "Order ID", value: selectedShipment.orderID },
                { label: "Transporter ID", value: selectedShipment.transporterID },
                { 
                  label: "Status", 
                  value: selectedShipment.status, 
                  className: "text-blue-600 font-bold"
                },
              ].map(({ label, value, className }) => (
                <div key={label}>
                  <p className="text-sm text-gray-500">{label}</p>
                  <p className={`font-semibold ${className || 'text-white'}`}>{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <HumidityCard currentHumidity={72} data={humidData}/>
            <TemperatureCard currentTemp={72} data={tempData}/>
            <AlertsCard alerts={alerts}/>
          </div>
          <div>
            <MapCard center={[51.505, -0.09]} popupText="Location" />
          </div>

          {/* Product Details */}
          {product && (
            <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-white border-b pb-2">Product Details</h3>
              <div className="grid">
                {[
                  { label: "Product ID", value: product.productID },
                  { label: "Product Name", value: product.name },
                  { label: "Price", value: `$${product.price.toFixed(2)}` }
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-sm text-gray-500 mb-1">{label}</p>
                    <p className="font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
    );
  };

  return (
    <div className="w-full h-full">
      <div className=" p-4 flex items-center">
        <button 
          onClick={handleBackClick} 
          className="mr-4 hover:bg-gray-200 p-2 rounded-full transition-colors duration-300"
        >
          <ArrowLeft className="h-6 w-6 text-gray-700" />
        </button>
        <h2 className="text-xl font-bold text-white">
          {shipmentId ? "Shipment Details" : "Tracking"}
        </h2>
      </div>
      <div className="p-4">
        <div className="h-full w-full">
          {shipmentId ? renderShipmentDetails() : renderShipmentList()}
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;