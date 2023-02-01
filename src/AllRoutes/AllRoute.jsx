import { Routes,Route } from "react-router-dom";
import React from 'react';
import  Cart  from "../Components/Cart";
import Navbar from "../Components/Navbar";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  )
}

export default AllRoute
