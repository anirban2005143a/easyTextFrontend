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
import BlogTitle from './components/features/blogTitle';
import BlogSummary from './components/features/blogSummary';
import Login from './components/form/login';
import Signup from "./components/form/signup"
import ForgotPassword from './components/form/forgotPassword';
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
      path: '/forgot',
      element: <ForgotPassword />
    },
    {
      path: '/requestFeature',
      element: <RequestFeature />
    },
    {
      path: '/explore',
      element: <Explore />
    },
    {
      path: '/features/blog/content',
      element: <BlogTitle />
    },
    {
      path: '/features/blog/summary',
      element: <BlogSummary />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
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
