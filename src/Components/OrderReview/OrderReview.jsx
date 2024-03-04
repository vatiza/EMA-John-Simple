import { TrashIcon } from '@heroicons/react/24/solid'
import './OrderReview.css';

const OrderReview = ({ product }) => {
    const { img, category, name, price, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price:<span className='price-text'>$ {price}</span></p>
                <p>Order Quantity : <span className='quantity-text'>{quantity}</span></p>
            </div>
            <button className='delete-btn'>
                <TrashIcon className='trash-icon'></TrashIcon>

            </button>
        </div>
    );
};

export default OrderReview;