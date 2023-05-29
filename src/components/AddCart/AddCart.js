import { useCart } from "../CartContext/CartContext";
import React from "react";

const AddCart = () => {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();
  const cartItemsArray = Object.values(cartItems);

  return (
    <div>
      {/* Sepet Ürünlerini Listeleme */}
      <div className="card-container d-flex flex-wrap justify-content-center gap-5">
        {cartItemsArray.map((item) => (
          <div
            className="card"
            style={{ width: "25rem" }}
            key={item.product.id}
          >
            <img src={item.product.image} className="card-img-top" alt="" />
            <div className="card-body">
              <h3>{item.product.name}</h3>
              <p>Price: {item.product.price} TL</p>
              <p>Quantity: {item.quantity}</p>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => removeFromCart(item.product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <p>Total Price: {getTotalPrice()} TL</p>
        {/* Sepeti Temizleme */}
        <button className="btn btn-danger" type="button" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default AddCart;
