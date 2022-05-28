import React from "react";  
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import MainCasino from "../components/casino/MainCasino";
import Navbar from "./Navbar";

const Casino = () => {
  var sports = document.getElementById('sports-main-root'); 
  sports?.remove();
  return (
    <div className='nh-bos'>  

        <Navbar />    
        <MainCasino />

    </div>
  );
};

export default Casino;