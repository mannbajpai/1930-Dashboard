import React from 'react'
import ReactDOM from 'react-dom/client'
import Signin from './routes/Home'
import Dashboard from './routes/Dashboard'
import Posts from './routes/Posts'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/posts",
    element: <Posts/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
