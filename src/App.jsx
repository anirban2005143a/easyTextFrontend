import { useState, useEffect } from 'react'
import './css/home.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectContext from './context/projectContext';
import Home from './components/support/home'
import Explore from './components/explore';
import About from './components/support/about';
import Contact from './components/support/contact';
import RequestFeature from './components/support/requestFeature';
import Login from './components/form/login';
import Signup from "./components/form/signup"
import Loadingui from './components/Loadingui.jsx';
import ForgotPassword from './components/form/forgotPassword';
import BlogTitle from './components/features/blogTitle';
import BlogSummary from './components/features/blogSummary';
import BlogContent from './components/features/blogContent';
import Paragraph from './components/features/Paragraph';
import SocialMediaPost from './components/features/socialMediaPost';
import Promotion from './components/features/promotion';
import UtubeDesc from './components/features/utubeDesc';
import UtubeTitle from './components/features/utubeTitle';
import JobRole from './components/features/jobRole';
import TextFormate from './components/features/textFormate';

function App() {

  const backendURL = import.meta.env.VITE_REACT_BACKENDURL

  const router = createBrowserRouter([
    {
      path:'/testing',
      element : <Loadingui/>
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
    }, {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/features/blog/content',
      element: <BlogContent />
    },
    {
      path: '/features/blog/title',
      element: <BlogTitle />
    },
    {
      path: '/features/blog/summary',
      element: <BlogSummary />
    },
    {
      path: '/features/paragraph',
      element: <Paragraph />
    },
    {
      path: '/features/social/post',
      element: <SocialMediaPost />
    },
    {
      path: '/features/promotion',
      element: <Promotion />
    },
    {
      path: '/features/youtube/desc',
      element: <UtubeDesc />
    },
    {
      path: '/features/youtube/title',
      element: <UtubeTitle />
    },
    {
      path: '/features/jobrole',
      element: <JobRole />
    },
    {
      path: '/features/text/formate',
      element: <TextFormate />
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
