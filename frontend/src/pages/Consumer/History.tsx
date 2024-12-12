import Footer from "@components/Footer";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";

const History = () => {
  return(
    <div className="flex h-screen bg-background">
      <Sidebar/>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          {/* Content here */}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default History;