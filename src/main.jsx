import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop.jsx';
import Home from './Components/Layout/Home.jsx';
import Orders from './Components/Orders/Orders.jsx';
import Inventroy from './Components/Inventory/Inventory.jsx';
import Login from './Components/Login/Login.jsx';

import cartProductsLoader from './Loaders/cartProductsLoader.js';
import OrderReview from './Components/OrderReview/OrderReview.jsx';
import Checkout from './Components/Checkout/Checkout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: '/inventory',
        element: <Inventroy></Inventroy>

      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path: '/login',
        element: <Login></Login>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
