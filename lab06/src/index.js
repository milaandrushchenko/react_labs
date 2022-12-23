import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './routers/Header';
import Categories from './routers/Categories';
import Products from './routers/Products';
import Product from './routers/Product';
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    element: <Header />,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Categories />,
        path: "/categories",
        loader: async () => {
          return fetch(`https://dummyjson.com/products/categories`);
        },
      },
      {
        element: <Products />,
        path: "/categories/:category/products",
        loader: async ({ params }) => {
          return fetch(`https://dummyjson.com/products/category/${params.category}`);
        },
      },
      {
        element: <Product />,
        path: "/products/:id",
        loader: async ({ params }) => {
          return fetch(`https://dummyjson.com/products/${params.id}`);
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
