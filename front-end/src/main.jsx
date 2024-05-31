import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './page/home/home.jsx'
import Accedi from './page/accedi/accedi.jsx'
import Aziendale from './page/aziendale/aziendale.jsx'
import ChiSiamo from './page/chiSiamo/chiSiamo.jsx'
import Servizi from './page/servizi/servizi.jsx'
import Blog from './page/blog/blog.jsx'
import Welfare from './page/welfare/welfare.jsx'
import NavBar from './components/navbar.jsx'
import Footer from './components/footer/footer.jsx'

import {createBrowserRouter,RouterProvider,}from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Accedi",
    element: <Accedi/>,
  },
  {
    path: "/Aziendale",
    element: <Aziendale/>,
  },
  {
    path: "/Blog",
    element: <Blog/>,
  },
  {
    path: "/Chi-siamo",
    element: <ChiSiamo/>,
  },
  {
    path: "/Servizi",
    element: <Servizi/>,
  },
  {
    path: "/Welfare",
    element: <Welfare/>,
  },
  {
    path: "/Accedi",
    element: <Accedi/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
     <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>,
)
