import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { totalProducts } = useLoaderData();
  const [currentPage, setCurrentPages] = useState(0);
  const [itemPerPage, setItemPerPages] = useState(10);

  const totalPages = Math.ceil(totalProducts / itemPerPage);
  // const pageNumbers = [];
  // for (let i = 0; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);
      //get quantity of the product
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //add the added product to saved cart
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product._id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const options = [5, 10, 20];
  function handleSelectChange(event) {
    setItemPerPages(parseInt(event.target.value));
    setCurrentPages(0);
  }

  return (
    <>
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart} handleClearCart={handleClearCart}>
            <Link to="/orders">
              <button className="checkout-btn">
                Review Order <FontAwesomeIcon icon={faListCheck} />
              </button>
            </Link>
          </Cart>
        </div>
      </div>
      {/* pagination */}

      <div className="pagination">
        <p>current pages:{currentPage}</p>
        {pageNumbers.map((number) => (
          <button
            className={currentPage === number ? "selected  " : ""}
            onClick={() => {
              setCurrentPages(number);
            }}
            key={number}
          >
            {number}
          </button>
        ))}
        <select value={itemPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option} onChange={handleSelectChange}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shop;
