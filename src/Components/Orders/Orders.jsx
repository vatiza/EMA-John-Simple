import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";


const Orders = () => {
    const cart = useLoaderData();

    return (
        <div className='shop-container'>
            <div className="products-container">
                <h1>This order page:{cart.length}</h1>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;