import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/footer';

export default function layout() {
  return (
    <>
    
    <Navbar/>
    <div className="py-24 w-[80%] mx-auto"
>
       <Outlet/>
    </div>
   
    
    <Footer/>
    
    </>
  )
  }
