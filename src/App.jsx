// import React from 'react'
// import Gfs from "./Pages/gfs"
// import Ideate from "./Pages/ideate"

// const App = () => {
//   return (
//     <>
//     <Gfs/>
//     <Ideate/>
//     </>
    
//   )
// }

// export default App


import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, RouterProvider, createBrowserRouter, Form } from "react-router-dom";
import Gfs from "./Pages/gfs";
import Ideate from "./Pages/ideate";
import Navbar from "./components1/Navbar";
import Footer from "./components1/footer";
import Footer2 from "./components2/Footer2";
import Navbar2 from "./components2/Navbar2"; 
import HomePage from "./Pages/gfs";
import RegistrationForm from "./components2/Form";
import IdeateRegistrationForm from "./components2/IdeateRegistration";
import GFSRegistrationForm from "./components1/GFSRegistrationForm";
const Layout = ()=>{
  return(
    <>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

const Layout2=()=>{
  return(
    <>
      <Navbar2/>
      <div>
        <Outlet/>
      </div>
      <Footer2/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {path:"/", element:<HomePage/> },
      {path:"/register-global-futures-summit", element:"<GFSRegistrationForm/>"}
    ]
  },
  {path:"/register", element:<RegistrationForm/>},
  {
    path:"/ideate",
    element: <Layout2/>,
    children:[
      {path:"/ideate",element:<Ideate/>},
      {path: "/ideate/register", element:<IdeateRegistrationForm/>}
    ]

  },
  
    
  
])
const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
