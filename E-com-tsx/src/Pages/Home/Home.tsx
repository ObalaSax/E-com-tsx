import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Home.css";
import { useEffect, useState } from "react";
//Interface manenoz
interface ProductProps {
  id: number;
  title: string | undefined;
  price: number;
  discountPercentage?: number;
  thumbnail: string;
}
interface FetchResponse {
  productData: ProductProps[];
}

function Home() {
  {
    /*---Hooks Declaration---------------------------*/
  }
  const [products, setProducts] = useState<ProductProps[]>([]);
  {
    /*--- Get the data using useEffect---------------------------*/
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const myData: FetchResponse = await response.json();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(setProducts);
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <ProductCard />
      </div>
    </div>
  );
}

export default Home;
