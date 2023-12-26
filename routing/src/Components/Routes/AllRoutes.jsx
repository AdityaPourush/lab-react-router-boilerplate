import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import PagenotFound from "../PagenotFound";


const AllRoutes = ()=>{
    return(
        <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<PagenotFound/>}/>
        </Routes>
        </>
    )
}

export default AllRoutes;