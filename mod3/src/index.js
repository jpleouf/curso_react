import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBreakpoints } from '@mui/system';
import Home from "./pages/Home"
import About from "./pages/About"
import Router, { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path : "/",
    element:<App />
  },
  {
    path : "/home",
    element:<Home />
  },
  {
    path : "/about",
    element:<About />
  }
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
