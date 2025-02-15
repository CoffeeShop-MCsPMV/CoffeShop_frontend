import React from 'react'
import NavGuest from '../pages/NavGuest';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthContext from '../context/AuthContext';

function GuestLayout() {
  const { user } = useAuthContext(); 
  
  return !user ? <>    <NavGuest /> <Outlet /> </>  : <Navigate to="/" />;
}

export default GuestLayout