import { useState, useEffect } from 'react'
import './css/home.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/support/Home'
import Explore from './components/Explore.jsx';
import About from './components/support/About'
import Contact from './components/support/Contact';
import RequestFeature from './components/support/RequestFeature';
import Testing from './Testing';

function App() {


  const router = createBrowserRouter([
    {
      path:'/testing',
      element : <Testing/>
    },
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
