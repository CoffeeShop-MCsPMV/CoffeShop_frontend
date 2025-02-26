import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "../style/Modal.css";

//import { useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

export default function Registration({ show, onHide }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const { loginReg, errors } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Összegyűjtjük egyetlen objektumban az űrlap adatokat
    const adat = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    console.log(adat);

    loginReg(adat, "/register").then((response) => {
      if(response && response.success){
        onHide();
      }
    });
  };

  const closeWindow = () => {
    onHide();  // Modal bezárása
    navigate("/");  // Navigálás a főoldalra
  };

  return (
    <div className=" m-auto" style={{ maxWidth: "400px" }}>
      <Modal show={show} onHide={closeWindow}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control"
                id="name"
                placeholder="Name"
                name="name"
              />
              <div>
                {errors.name && (
                  <span className="text-danger">{errors.name[0]}</span>
                )}
              </div>
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email address:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                id="email"
                placeholder="Email"
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                id="pwd"
                placeholder="Password"
                name="pwd"
              />
              <div>
                {errors.password && (
                  <span className="text-danger">{errors.password[0]}</span>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="pwd2" className="form-label">
                Confirm password:
              </label>
              <input
                type="password"
                value={password_confirmation}
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                }}
                className="form-control"
                id="pwd2"
                placeholder="Password"
                name="pwd2"
              />
              <div>
                {errors.password_confirmation && (
                  <span className="text-danger">
                    {errors.password_confirmation[0]}
                  </span>
                )}
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
