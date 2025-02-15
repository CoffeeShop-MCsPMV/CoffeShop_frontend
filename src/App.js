import { Route, Routes, useNavigate } from "react-router-dom";
import useAuthContext from "./context/AuthContext";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import GuestLayout from "./layouts/GuestLayout";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import MainUser from "./pages/MainUser";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import NavGuest from "./pages/NavGuest";


function App() {
  const { user } = useAuthContext();

  const [showModal, setShowModal] = useState(false); // Modális ablak állapota

  // Modál bezárása
  const handleCloseModal = () => {
    setShowModal(false); // Bezárja a modált
  };


  return (
    <>
       <NavGuest setShowModal={setShowModal} />
      <Routes>
        {/* Vendég layout */}
        {!user && (
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Main />} />
            <Route
              path="/login"
              element={<Login show={showModal} onHide={handleCloseModal} />}
            />
            <Route path="/register" element={<Registration />} />
          </Route>
        )}

        {/* Admin és User ugyanazon útvonalon */}
        {user && (
          <Route
            path="/"
            element={
              user.profile_type === "A" ? <AdminLayout /> : <UserLayout />
            }
          >
            <Route index element={<MainUser />} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
