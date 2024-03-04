
import './OrderReview.css';

const OrderReview = ({ product }) => {
    const { img, category, price, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />

        </div>
    );
};

export default OrderReview;