import React from 'react'
import NavGuest from '../pages/navigation/NavGuest';
import { Outlet } from 'react-router-dom';
import useAuthContext from '../context/AuthContext';

function GuestLayout() {
  const { setShowModal } = useAuthContext(); 
  return  <>    
  <NavGuest setShowModal={setShowModal}/> 
  <Outlet /> 
  </> ;
}

export default GuestLayout