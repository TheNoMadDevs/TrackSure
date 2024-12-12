import Footer from "@components/Footer";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import ManageUserCard from '@components/ManageUserCard';
import HumidityCard from "@components/HumidityCard";
import TemperatureCard from '@components/TemperatureCard';
import AlertsCard from '@components/AlertsCard';
import ManageOrdersCard from '@components/ManageOrdersCard';

const Dashboard = () => {

  // Dummy data
  interface TemperatureDataPoint {
    time: string;
    temp: number;
  }
  
  interface HumidityDataPoint {
    time: string;
    humidity: number;
  }
  
  const temperatureData: TemperatureDataPoint[] = [
    { time: "00:00", temp: 2 },
    { time: "04:00", temp: 3 },
    { time: "08:00", temp: 5 },
    { time: "12:00", temp: 4 },
    { time: "16:00", temp: 3 },
    { time: "20:00", temp: 2 },
  ]
  
  const humidityData: HumidityDataPoint[] = [
    { time: "00:00", humidity: 70 },
    { time: "04:00", humidity: 72 },
    { time: "08:00", humidity: 75 },
    { time: "12:00", humidity: 73 },
    { time: "16:00", humidity: 71 },
    { time: "20:00", humidity: 70 },
  ]

  const orders = [
    { 
      id: "1", 
      status: "Processing", 
      customer: "John Doe", 
      total: 99.99 
    },
    { 
      id: "2", 
      status: "Shipped", 
      customer: "Jane Smith", 
      total: 149.50 
    }
  ];

  const alerts = ['This is one alert', 'This is another alert']

  return(
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <HumidityCard data={humidityData} currentHumidity={72}/>
            <TemperatureCard data={temperatureData} currentTemp={3}/>
            <ManageUserCard />
            <AlertsCard alerts={alerts}/>
            <ManageOrdersCard orders={orders} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard;
