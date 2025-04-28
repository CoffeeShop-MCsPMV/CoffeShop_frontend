import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyAxios } from "./myAxios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  console.log(user);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const csrf = () => MyAxios.get("/sanctum/csrf-cookie");

  const getUser = async () => {
    await csrf(); 
    try {
      const { data } = await MyAxios.get("/api/user");
      console.log(data);
      setUser(data);
      console.log(user);
    } catch (error) {
      console.error("Hiba történt a felhasználó lekérésekor:", error);
    }
  };

  const logout = async () => {
    await csrf();

    MyAxios.post("/logout").then((resp) => {
      setUser(null);
      console.log(resp);
      navigate("/");
    });
  };

  const loginReg = async ({ ...payLoad }, endpoint) => {
    await csrf();
    console.log(payLoad, endpoint);

    try {
      await MyAxios.post(endpoint, payLoad);
      console.log("succesful");
      await getUser();
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  useEffect(() => {
    console.log("User frissült:", user);
    if (!user) {
      getUser();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logout,
        loginReg,
        errors,
        getUser,
        user,
        showModal,
        setShowModal,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        password_confirmation,
        setPasswordConfirmation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
