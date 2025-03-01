import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import Modal from "react-bootstrap/Modal";
import "../style/Modal.css";

export default function Login({ show, onHide }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loginReg, errors } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    //Összegyűjtjük egyetlen objektumban az űrlap adatokat
    const adat = {
      email: email,
      password: password,
    };
    console.log(adat);

    loginReg(adat, "/login").then((response) => {
      if (response && response.success) {
        onHide(); //modál bezárása
      }
    });
  };

  const closeWindow = () => {
    onHide();  // Modal bezárása
    navigate("/") // Navigálás a főoldalra
  };
  
  return (
    <>
      <Modal show={show} onHide={closeWindow}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email address:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="email"
                placeholder="email"
                name="email"
              />
              <div>
                {errors.email && (
                  <span className="text-danger">{errors.email[0]}</span>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="pwd"
                placeholder="jelszó"
                name="pwd"
              />
              <div>
                {errors.password && (
                  <span className="text-danger">{errors.password[0]}</span>
                )}
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
              <p>
                Don't have an account?
                <Link className="nav-link text-info" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
