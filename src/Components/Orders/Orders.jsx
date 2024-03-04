import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import OrderReview from "../OrderReview/OrderReview";
import './Orders.css'



const Orders = () => {
    const cart = useLoaderData();
    console.log(cart)

    return (
        <div className='shop-container'>
            <div className="review-container ">
                {
                    cart.map(product => <OrderReview
                        key={product.id}
                        product={product}
                    ></OrderReview>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;