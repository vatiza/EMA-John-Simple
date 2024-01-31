/* eslint-disable react/prop-types */
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
 
    const handleAddToCart = props.handleAddToCart;
    const { img, name, seller, ratings, price } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className='product-info'>
                <h2 className='product-name'>{name}</h2>
                <p className='product-price'> Price: ${price}</p>
                <p className='product-manufacturer'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='addtocart-btn'>Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Product;