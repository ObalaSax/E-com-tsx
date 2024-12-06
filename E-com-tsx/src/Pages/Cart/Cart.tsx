import CartComponent from "../../Components/CartComponent/CartComponent";
import "./Cart.css";

function Cart() {
  return (
    <div className="cart">
      <div className="cart-container">
        <CartComponent />
      </div>
    </div>
  );
}

export default Cart;
