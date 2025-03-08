import React, { useContext, useState } from "react";
import useAuthContext from "../context/AuthContext";
import { ApiContext } from "../context/apiContext";
import "../style/Profile.css";

function Profile() {
  const { user } = useAuthContext();
  const { updateData } = useContext(ApiContext);
  const [data, setData] = useState({
    name: user.name,
    email: user.email,
    password: "",
    confirmPassword: "",
    is_subscribed: user.is_subscribed
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    // If the form is valid, send the data
    if (isFormValid) {
      updateData(`/api/users/${user.id}`, data);
      setSuccessMessage("Data updated successfully!");
    }
  }  

  function handleChange(event) {
    const tempData = { ...data };
    tempData[event.target.id] = event.target.value;
    setData({ ...tempData });

    // Update form validation status
    validateForm(tempData);
  }

  // Form validation
  function validateForm(updatedData) {
    const isPasswordValid = updatedData.password === updatedData.confirmPassword && updatedData.password !== "";
    const isEmailValid = updatedData.email !== "" && updatedData.name !== "";
    setIsFormValid(isPasswordValid && isEmailValid);
  }

  function handleFormToggle() {
    setIsFormDisabled((prev) => !prev); //fordítja az értéket
  }

  return (
    <div className="profile">
      <div className="profileForm">
      <button type="button" className="btn btn-secondary mb-3" onClick={handleFormToggle}>
        {isFormDisabled ? "Enable Editing" : "Disable Editing"}
      </button>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={data.name}
            onChange={handleChange}
            disabled={isFormDisabled}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={data.email}
            onChange={handleChange}
            disabled={isFormDisabled}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={data.password}
            onChange={handleChange}
            disabled={isFormDisabled}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm password:
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
            disabled={isFormDisabled}
          />
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            checked={data.is_subscribed}
            onChange={(e) => setData({ ...data, is_subscribed: e.target.checked })}
            disabled={isFormDisabled}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Subscribe to newsletter
          </label>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
          Submit
        </button>
      </form>
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
      </div>
    </div>
  );
}

export default Profile;
