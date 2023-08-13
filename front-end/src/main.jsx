import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import{Info,Header,Footer,Body,Login} from "./components"
import { BrowserRouter,createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

