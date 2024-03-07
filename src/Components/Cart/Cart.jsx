/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css';
import { faTrash, faPlay } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, handleClearCart }) => {
    // const cart = props.cart;
    // const { cart } = props;
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 4 / 100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price:$ {total} </p>
            <p>Total Shipping:$ {totalShipping}</p>
            <p>Tax:$ {tax.toFixed(2)}</p>
            <h6>Grand Total:$ {grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='clear-btn'>Clear Cart
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className='checkout-btn'>Proceed Checkout <FontAwesomeIcon icon={faPlay} />
            </button>
        </div>
    );
};

export default Cart;