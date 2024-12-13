import { useNavigate, useParams } from "react-router-dom";
import "./ProductItem.css";
import { useEffect, useState } from "react";
import axios from "axios";

interface Prods {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string;
}
function ProductItem() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProd] = useState<Prods | null>();

  useEffect(() => {
    if (id) {
      axios
        .get<Prods>(`https//:dummyjson.com/products/${id}`)
        .then((response) => {
          setProd(response.data);
        });
    }
  }, [id]);

  if (!product) {
    return <h1>Ebu Relax My guy....</h1>;
  }
  return (
    <div className="productItem">
      <div className="productItem-container">
        <h1>Product Item</h1>
        <button onClick={() => navigate(-1)}>Back</button>
        <img src={product.images[0]} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <h3>Price: {product.price}</h3>
        <h3>Rating: {product.rating}</h3>
      </div>
    </div>
  );
}

export default ProductItem;
