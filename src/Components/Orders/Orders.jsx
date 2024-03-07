import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import OrderReview from "../OrderReview/OrderReview";
import './Orders.css'
import { useEffect, useState } from "react";



const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState([savedCart])

    console.log(savedCart)

    return (
        <div className='shop-container'>
            <div className="review-container ">
                {
                    savedCart.map(product => <OrderReview
                        key={product.id}
                        product={product}
                    ></OrderReview>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={savedCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;