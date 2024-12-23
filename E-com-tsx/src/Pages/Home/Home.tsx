import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

interface ProductDataProps {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}

interface FetchProductData {
  products: ProductDataProps[];
}

function Home() {
  const [products, setProducts] = useState<ProductDataProps[]>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const fetchedProducts: FetchProductData = await response.json();
//THIS IS THE LINE YOU ARE LOOKING FOR
        const myProducts = Array.from(
          new Set(fetchedProducts.products.map((products) => products)),
        );

        console.log(myProducts);
        setProducts(myProducts);
      } catch (error) {
        console.error("Bro Noma", error);
      }
    };
    fetchProductData();
  }, []);

  console.log("Hello", products);

  return (
    <div className="home">
      <div className="home-container">
        <h1>Home</h1>
        <ul>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                thumbnail={product.thumbnail}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
