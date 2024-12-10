import { useEffect, useState } from "react";

interface ProductDataProps {
  id: number;
  title: string;
}

function Home() {
  const [products, setProducts] = useState<ProductDataProps[]>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const fetchedProducts = (await response.json()) as ProductDataProps[];
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Bro Noma", error);
      }
    };
    fetchProductData();
  }, []);

  console.log(products);

  return (
    <div className="home">
      <div className="home-container">
        <h1>Home</h1>
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id}> {product.title}</li>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Home;
