import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import './index.css';
import Layout from './components/layout/layout.jsx';
import LayoutDashBoard from './components/layout/layout-dashboard.jsx'
import SingleProduct from "./pages/single-product.jsx";
import About from './pages/about';
import Products from './pages/products';
import ProductsList from "./pages/products-list.jsx";
import AllProducts from './pages/all-products.jsx'
import CreateProduct from './pages/create-product.jsx'
import DeleteProduct from './pages/delete-product.jsx'
import UpdateProduct from './pages/update-product.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "",
            element: <ProductsList />,
          },
          {
            path: ":id",
            element: <SingleProduct />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <LayoutDashBoard />,
    children: [
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/create-product",
        element: <CreateProduct />,
      },
      {
        path: "/delete-product",
        element: <DeleteProduct />,
      },
      {
        path: "/update-product",
        element: <UpdateProduct />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);