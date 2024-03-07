import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import OrderReview from "../OrderReview/OrderReview";
import './Orders.css'
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../utilities/fakedb";



const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState([savedCart]);


    const handleRemoveFromCart = (id) => {
        //! please fix this 17 number line after error: product is not defined;
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart();
    }



    return (
        <div className='shop-container'>
            <div className="review-container ">
                {
                    savedCart.map(product => <OrderReview
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></OrderReview>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={savedCart}
                    handleClearCart={handleClearCart}
                >
<div>form orders</div>

                </Cart>
            </div>
        </div>
    );
};

export default Orders;