/* eslint-disable react/prop-types */
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { img, name, seller, ratings, quantity, price } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className='product-info'>
                <h2 className='product-name'>{name}</h2>
                <p className='product-price'> Price: ${price}</p>
                <p className='product-manufacturer'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings}</p>
            </div>
            <button className='addtocart-btn'>Add To Cart <i class="fa-solid fa-cart-arrow-down"></i></button>

        </div>
    );
};

export default Product;