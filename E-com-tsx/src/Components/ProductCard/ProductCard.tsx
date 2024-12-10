//import { useEffect } from "react";
import "./ProductCard.css";
interface ProductDataProps {
  id: number;
  title: string;
  price: number;
  image: string;
}
function ProductCard(prop: ProductDataProps) {
  return (
    <div className="productcard">
      <div className="productcard-container">
        <img src={prop.image} alt={prop.title} />
        <h2>{prop.title}</h2>
        <p>{prop.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
