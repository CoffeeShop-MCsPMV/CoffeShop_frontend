import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyAxios } from "./myAxios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  console.log(user)
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const csrf = () => MyAxios.get("/sanctum/csrf-cookie");

  //bejelentkezett felhasználó payLoadainak lekérdezése
  const getUser = async () => {
    await csrf(); // CSRF cookie lekérése
    try {
      const { data } = await MyAxios.get("/api/users");
      console.log(data);
      setUser(data);
      console.log(user)
    } catch (error) {
      console.error("Hiba történt a felhasználó lekérésekor:", error);
    }
  };

  const logout = async () => {
    await csrf();

    MyAxios.post("/logout").then((resp) => {
      setUser(null);
      console.log(resp);
    });
  };

 
  
  const loginReg = async ({ ...payLoad }, endpoint) => {
    //lekérjük a csrf tokent
    await csrf();
    console.log(payLoad, endpoint);

    try {
      await MyAxios.post(endpoint, payLoad);
      console.log("succesful");
      //sikeres bejelentkezés/regisztráció esetén
      //Lekérdezzük a usert
      //await getUser();
      //elmegyünk a kezdőlapra
      await getUser()
      navigate("/");

    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  // useEffect(() => {
  //   console.log("User frissült:", user);
  // }, [user]);

  return (
    <AuthContext.Provider value={{ logout, loginReg, errors, getUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}