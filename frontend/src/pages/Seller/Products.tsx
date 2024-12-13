import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import Sidebar from "@components/seller/Sidebar";
import ProductCard from '@components/seller/ProductsPage';

const History = () => {

  const handlePurchase = (ok: number) => {
    // Logic here  
    return ok;
  }

  const handleRemove = () => {
    // Logic here
  }
  
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="flex flex-col h-full">
            <div className="flex-1 p-4">
              <div className="grid gap-2 md:grid-cols-4 lg:grid-cols-6 my-2 mx-4">
              <ProductCard 
                name="Milk" image="https://eportal.sundarini.organic/assets/images/thumb/1704459290-1704459290-451950086.jpg"
                price={29.99}
                onBuy={(quantity) => handlePurchase(quantity)}
                onRemove={() => handleRemove()}
              />
              <ProductCard 
                name="Ghee" image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSh42c8DllbUbHYlP1ShqlzLKq5ADErrod3X5ZRQjmQ8DeDc6aNZZustSLnSrID2-sNA0gT-q5UdHU9NOgdnlXEnsRnts2NWZkw414yAtdvd32tZHRBM6ae"
                price={99.99}
                onBuy={(quantity) => handlePurchase(quantity)}
                onRemove={() => handleRemove()}
              />
              <ProductCard 
                name="Meat" image="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSU4dr65wAuX1ZRJVbINBqTu5tFgMg-9vRA3nKF7MJoQDYt3sZM1VWHjdhuJWIZoIklfRVClLpABz3NXWYxZ4g"
                price={499.99}
                onBuy={(quantity) => handlePurchase(quantity)}
                onRemove={() => handleRemove()}
              />
              <ProductCard 
                name="Milk" image="https://eportal.sundarini.organic/assets/images/thumb/1704459290-1704459290-451950086.jpg"
                price={29.99}
                onBuy={(quantity) => handlePurchase(quantity)}
                onRemove={() => handleRemove()}
              />
              <ProductCard 
                name="Ghee" image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSh42c8DllbUbHYlP1ShqlzLKq5ADErrod3X5ZRQjmQ8DeDc6aNZZustSLnSrID2-sNA0gT-q5UdHU9NOgdnlXEnsRnts2NWZkw414yAtdvd32tZHRBM6ae"
                price={99.99}
                onBuy={(quantity) => handlePurchase(quantity)}
                onRemove={() => handleRemove()}
              />
              <ProductCard 
                name="Meat" image="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSU4dr65wAuX1ZRJVbINBqTu5tFgMg-9vRA3nKF7MJoQDYt3sZM1VWHjdhuJWIZoIklfRVClLpABz3NXWYxZ4g"
                price={499.99}
                onBuy={(quantity) => handlePurchase(quantity)}
                onRemove={() => handleRemove()}
              />
              <ProductCard 
                name="Milk" image="https://eportal.sundarini.organic/assets/images/thumb/1704459290-1704459290-451950086.jpg"
                price={29.99}
                onBuy={(quantity) => handlePurchase(quantity)}
                onRemove={() => handleRemove()}
              />
              <ProductCard 
                name="Ghee" image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSh42c8DllbUbHYlP1ShqlzLKq5ADErrod3X5ZRQjmQ8DeDc6aNZZustSLnSrID2-sNA0gT-q5UdHU9NOgdnlXEnsRnts2NWZkw414yAtdvd32tZHRBM6ae"
                price={99.99}
                onBuy={(quantity) => handlePurchase(quantity)}
                onRemove={() => handleRemove()}
              />
              <ProductCard 
                name="Meat" image="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSU4dr65wAuX1ZRJVbINBqTu5tFgMg-9vRA3nKF7MJoQDYt3sZM1VWHjdhuJWIZoIklfRVClLpABz3NXWYxZ4g"
                price={499.99}
                onBuy={(quantity) => handlePurchase(quantity)}
                onRemove={() => handleRemove()}
              />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default History ;