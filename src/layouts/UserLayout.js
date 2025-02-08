import React from 'react'
import useAuthContext from '../context/AuthContext';
import NavUser from '../pages/NavUser';
import { Navigate, Outlet } from 'react-router-dom';

function UserLayout() {
  const {user} = useAuthContext();
 return user && user.profile_type === "U" ? <> <NavUser /> <Outlet /> </> : <Navigate to="/login" />;
}

export default UserLayout