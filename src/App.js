import { Route, Routes } from "react-router-dom";
import useAuthContext from "./context/AuthContext";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import GuestLayout from "./layouts/GuestLayout";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";


function App() {
  const { user } = useAuthContext();
  return (
      <>

          <Routes>
              {/* Vendég layout */}
              {!user && (
                  <Route element={<GuestLayout />}>
                      <Route path="/" element={<Main />} />
                      <Route path="login" element={<Login />} />
                      <Route path="registration" element={<Registration />} />
                  </Route>
              )}

              {/* Admin és User ugyanazon útvonalon */}
              {user && (
                  <Route
                      path="/"
                      element={
                          user.role === "A" ? (
                              <AdminLayout />
                          ) : (
                              <UserLayout />
                          )
                      }
                  >
                      <Route index element={<Main />} />
                  </Route>
              )}
          </Routes>
      </>
  );
}

export default App;
