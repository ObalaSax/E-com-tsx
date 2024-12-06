import CartCard from "./CartCard/CartCard";
import "./CartComponent.css";
function CartComponent() {
  return (
    <div className="cartcard">
      <div className="cartcard-container">
        {/**------------------CART Details------------------ */}
        <div className="card-details">
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>

        {/**------------------CART SUMMARY------------------ */}
        <div className="cartcard-summary">
          <div className="cart-summary-title">
            <h1>Cart Summary</h1>
            <hr />
          </div>
          <div className="cart-summary-total">
            <h2>Subtotal</h2>
            <h3>TOTAL PRICE</h3>
            <hr />
          </div>
          <div className="cart-summary-checkout">
            <button>CHECKOUT (PRICE)</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;

/*<div className="cartcard-details">
            <div className="cartcard-details-title">
              <h1>Cart</h1>
              <hr />
            </div>
            <div className="cartcard-details-data">
              <img src="" alt="Product Image" />
              <hr />
              <div className="cartcard-details-productdetails">
                <h3>Product Name</h3>
                <h5>Variation: (VARIATION)</h5>
                <h6>Stock Level: (STOCK LEVEL)</h6>
              </div>
              <hr />
              <div className="cartcard-details-Price">
                <h2>Ksh (PRICE)</h2>
              </div>
            </div>
            <div className="cartcard-delete-add-btns">
              <div className="cartcard-delete-item">
                <button>Remove</button>
              </div>
              <div className="cartcard-increment-item">
                <button>-</button>
                <input type="text" readOnly />
                <button>+</button>
              </div>
            </div>
          </div>*/
