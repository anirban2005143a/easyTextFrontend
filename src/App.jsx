import { useState, useEffect } from 'react'
import './css/home.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectContext from './context/projectContext';
import Home from './components/support/home'
import Explore from './components/explore';
import About from './components/support/about';
import Contact from './components/support/contact';
import RequestFeature from './components/support/requestFeature';
import Testing from './Testing.jsx'


function App() {

  const backendURL = import.meta.env.VITE_REACT_BACKENDURL

  const router = createBrowserRouter([
    {
      path:'/testing',
      element : <Testing/>
    },
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/requestFeature',
      element: <RequestFeature />
    },
    {
      path: '/explore',
      element: <Explore />
    },
  
  ])

  return (
    <ProjectContext.Provider value={{
     backendURL
    }}>
      <RouterProvider router={router} />
    </ProjectContext.Provider>

  )
}

export default App
