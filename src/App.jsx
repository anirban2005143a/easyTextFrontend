import { useState, useEffect } from 'react'
import './css/home.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/support/home'
import Explore from './components/explore';
import About from './components/support/about'
import Contact from './components/support/contact';
import RequestFeature from './components/support/requestFeature';

function App() {


  const router = createBrowserRouter([
    {
      path:'/',
      element : <Home/>
    },
    {
      path:'/about',
      element : <About/>
    },
    {
      path:'/contact',
      element : <Contact/>
    },
    {
      path:'/requestFeature',
      element : <RequestFeature/>
    },
    {
      path:'/explore',
      element : <Explore/>
    },
  ])

  return (
    <RouterProvider router={router} />

  )
}

export default App
