import "./CartCard.css";

function CartCard() {
  return (
    <div className="cartcard-details">
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
        <hr />
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
    </div>
  );
}

export default CartCard;
