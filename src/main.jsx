import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Layout/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import AddCoffee from './Pages/AddCoffee/AddCoffee.jsx';
import Details from './Pages/Details/Details.jsx';
import UpdateCoffeeDetails from './Pages/UpdateCoffeeDetails/UpdateCoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffees')
      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffeeDetails></UpdateCoffeeDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
