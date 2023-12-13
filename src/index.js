import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
    BrowserRouter as Router,
    Routes,
    Route, Link, createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Catalog from "./pages/catalog";
import Pokemon from "./pages/pokemon";
import PageNotFound from "./pages/404";
import About from "./pages/about";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: 'catalog',
        element: <Catalog/>
    },
    {
        path: 'pokemon/:id',
        element: <Pokemon/>
    },
    {
        path: '*',
        element: <PageNotFound/>
    },
    {
        path: 'about',
        element: <About/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
