import React from 'react'
import useAuthContext from '../context/AuthContext';
import NavUser from '../pages/navigation/NavUser';
import { Outlet } from 'react-router-dom';

function UserLayout() {
 return <> <NavUser /> <Outlet /> </> ;
}

export default UserLayout