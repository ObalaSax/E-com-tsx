//import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
}
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  image,
  price,
}) => {
  return (
    <div className="productCard">
      <div className="productcard-container">
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>{price}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
