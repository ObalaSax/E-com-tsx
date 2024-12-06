import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
}
function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const request = await fetch("https://dummyjson.com/products");
        const myProductsData: ProductCardProps[] = await request.json();
        setProducts(myProductsData);
      } catch (error) {
        console.error("Failed to obtain product details", error);
      }
    };
    fetchProductData();
  }, []);
  return (
    <div className="home">
      <div className="home-container">
        <h1>Home</h1>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
