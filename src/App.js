import { Route, Routes, useNavigate } from "react-router-dom";
import useAuthContext from "./context/AuthContext";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import GuestLayout from "./layouts/GuestLayout";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./pages/Products";
import ComingSoon from "./pages/ComingSoon";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Profil from "./pages/Profil";

function App() {
  const { user, setShowModal, showModal } = useAuthContext();

  // Modál bezárása
  const handleCloseModal = () => {
    setShowModal(false); // Bezárja a modált
  };

  return (
    <>
      <Routes>
        {/* Vendég layout */}
        {!user && (
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route
              path="login"
              element={<Login show={showModal} onHide={handleCloseModal} />}
            />

            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />

            <Route
              path="register"
              element={
                <Registration show={showModal} onHide={handleCloseModal} />
              }
            />
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
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/orders" element={<Orders />} />
            <Route index element={<Main />} />
            <Route
              path="register"
              element={
                <Registration show={showModal} onHide={handleCloseModal} />
              }
            />
            <Route
              path="login"
              element={<Login show={showModal} onHide={handleCloseModal} />}
            />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
