import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import OrderReview from "../OrderReview/OrderReview";
import { deleteShoppingCart, removeFromDb } from "../utilities/fakedb";
import "./Orders.css";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    console.log(id);
    const remaining = cart.filter((item) => item._id !== id); // Changed 'product' to 'item'
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="review-container ">
        {savedCart.map((product) => (
          <OrderReview
            key={product._id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          ></OrderReview>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={savedCart} handleClearCart={handleClearCart}>
          <Link to="/checkout">
            {" "}
            <button className="checkout-btn">
              Proceed Checkout <FontAwesomeIcon icon={faCreditCard} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
