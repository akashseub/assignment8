import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import DonationCardDetails from './Components/DonationCardDetails';
import Donation from './Components/Donation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/cardDetails/:id',
      element: <DonationCardDetails></DonationCardDetails>,
      loader: () => fetch('data.json')
    },
    {
      path: '/donation',
      element: <Donation></Donation>,
      loader: () => fetch('data.json')
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
