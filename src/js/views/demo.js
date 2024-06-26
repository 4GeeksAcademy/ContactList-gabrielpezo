import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [newContact, setNewContact] = useState({
    name: "",
    address: "",
    phone: "",
    email: ""
  });

  const handleInputChange = e => {
    setNewContact({
      ...newContact,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    actions.contactCreate(newContact)
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        console.error("Error creating contact:", error);
      });
  };

  return (
    <div className="container">
      <h1>Add new contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            value={newContact.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Address"
            value={newContact.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone"
            value={newContact.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Email"
            value={newContact.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <Link to="/">
          <span>Back home</span>
        </Link>
      </form>
    </div>
  );
};