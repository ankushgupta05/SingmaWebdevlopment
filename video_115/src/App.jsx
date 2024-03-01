import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import User from './components/User';



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/></>,
    },
    
    {
      path: "/login",
      elemen: <><Navbar/><Login/></>,
    },
    
    {
      path: "/about",
      elemen: <><Navbar/><About/></>,
    },

    {
      path: "/user/:username",
      elemen: <><Navbar/><User/></>,
    },
    
  ])

  
  return (
    <>
    
       <RouterProvider router={router} />
    </>
  )
}

export default App


// NOTE :'npm install react-router-dom' and 'npm i react-router-dom' this command run in terminal for install router


