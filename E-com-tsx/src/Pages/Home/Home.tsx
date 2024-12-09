import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

interface ProductDataProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

function Home() {
  const [products, setProducts] = useState<ProductDataProps[]>([]);
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const myProductsdata: ProductDataProps[] = await response.json();
        const products = myProductsdata;
        setProducts(myProductsdata);

        console.log("Hello", products);
        console.log("Tuko sawa", myProductsdata);
      } catch (error) {
        console.error("Failed to access Products", error);
      }
    };
    fetchProductData();
  });

  return (
    <div className="home">
      <div className="home-container">
        <h1>Home</h1>
        <ProductCard />
      </div>
    </div>
  );
}

export default Home;
