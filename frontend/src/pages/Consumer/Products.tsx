import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import Sidebar from "@components/consumer/Sidebar";
import ProductCard from "@components/consumer/ProductsPage";
import { useEffect, useState } from "react";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import app from "@services/firebase";
import { useAuthUser } from "@hooks/useAuthUser";
import { Product } from "@schemas/productSchema";
import toast from "react-hot-toast";

const History = () => {
  const db = getFirestore(app);
  const { user } = useAuthUser();
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      if (user) {
        const productsQuery = query(
          collection(db, "products"),
        );
        const querySnapshot = await getDocs(productsQuery);
        const fetchedProducts: Product[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedProducts.push(data as Product);
        });
        setProducts(fetchedProducts);
      }
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const handleBuy = async (productID: string, quantity: number) => {
    try {
      // TODO: Implement buying product
      console.log("Buying product: ", productID, quantity);
      toast.success("Order placed successfully");
    } catch (error) {
      console.error("Error buying product: ", error);
    }
  };
  

  useEffect(() => {
    fetchProducts();
  }, [user, db]);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="flex flex-col h-full">
            <div className="flex-1 p-4">
              {/* Display Products */}
              <div className="grid gap-2 md:grid-cols-4 lg:grid-cols-6 my-2 mx-4">
                {products.length > 0 ? (
                  products.map((product) => (
                    <ProductCard
                      key={product.productID}
                      name={product.name}
                      image={product.imageURL}
                      price={product.price}
                      quantity={product.quantity}
                      onBuy={(quantity) => handleBuy(product.productID, quantity)}
                    />
                  ))
                ) : (
                  <p>No products available.</p>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default History;
