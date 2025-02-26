import React from 'react'
import NavGuest from '../pages/navigation/NavGuest';
import { Outlet } from 'react-router-dom';
import useAuthContext from '../context/AuthContext';
import Footer from '../components/Footer';

function GuestLayout() {
  const { setShowModal } = useAuthContext(); 
  return  <>    
  <NavGuest setShowModal={setShowModal}/> 
  <Outlet /> 
  <Footer />
  </> ;
}

export default GuestLayout