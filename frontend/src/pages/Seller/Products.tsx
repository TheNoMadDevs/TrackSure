import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import Sidebar from "@components/seller/Sidebar";
import ProductCard from '@components/seller/ProductsPage';
import { useEffect, useState } from "react";
import { getFirestore, collection, query, where, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
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
          where("sellerID", "==", user.uid)
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

  const handleRemove = async (productID: string) => {
    try {
      const productDocRef = doc(db, "products", productID);
      await deleteDoc(productDocRef);
      toast.success("Product removed successfully.");
    } catch (error) {
      console.error("Error removing product: ", error);
    }
  };

  const handleSave = async (productID: string, quantity: number, price: number) => {
    try {
      const productDocRef = doc(db, "products", productID);
      await updateDoc(productDocRef, {
        quantity: quantity,
        price: price,
        updatedAt: new Date()
      });
      fetchProducts();
      toast.success("Product updated successfully.");  
    } catch (error) {
      console.error("Error updating product: ", error);
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
              <div className="grid gap-2 md:grid-cols-4 lg:grid-cols-6 my-2 mx-4">
                {products.length > 0 ? (
                  products.map((product) => (
                    <ProductCard
                      key={product.productID}
                      name={product.name}
                      image={product.imageURL}
                      price={product.price}
                      quantity={product.quantity}
                      onRemove={() => handleRemove(product.productID)}
                      onSave={(quantity, price) => handleSave(product.productID, quantity, price)}
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
}

export default History;
