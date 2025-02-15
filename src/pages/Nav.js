import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

export default function Nav() {
    const { user, logout } = useAuthContext(); 

      // Ha a felhasználó rákattint a Login linkre, megjelenítjük a modált
//   const handleLoginClick = () => {
//     setShowModal(true); // A modális ablakot megjelenítjük
//   };
 
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link className="nav-link" to="/">
                            Main
                        </Link>
                    </li>
                    {user ? (
                        <>
                            <li className="navbar-item">
                                <button className="nav-link" onClick={()=>{logout()}}>
                                    Sign Out
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="navbar-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="nav-link" to="/registr">
                                    Registration
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}