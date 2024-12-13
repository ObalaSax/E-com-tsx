//import { useEffect } from "react";
import "./ProductCard.css";
interface ProductDataProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}
function ProductCard(prop: ProductDataProps) {
  return (
    <div className="productcard">
      <div className="productcard-container">
        <a href={`/products/${prop.id}`}>
          <img src={prop.thumbnail} alt={prop.title} />
          <h2>{prop.title}</h2>
          <p>{prop.price}</p>
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
