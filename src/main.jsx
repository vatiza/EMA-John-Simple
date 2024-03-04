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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/order_review',
       
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
