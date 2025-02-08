import React from 'react'
import useAuthContext from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';
import NavAdmin from '../pages/NavAdmin';

function AdminLayout() {
 const {user} = useAuthContext();
 return user && user.profile_type === "A" ? <> <NavAdmin /> <Outlet /> </> : <Navigate to="/login" />;
}

export default AdminLayout