import { useEffect, useState } from "react";

interface ProductDataProps {
  id: number;
  title: string;
  category: string;
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

        const uniqueCategories = Array.from(
          new Set(fetchedProducts.products.map((products) => products)),
        );

        console.log(uniqueCategories);
        setProducts(uniqueCategories);
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
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id}>
                {" "}
                {product.category}
                {product.title}
              </li>
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
