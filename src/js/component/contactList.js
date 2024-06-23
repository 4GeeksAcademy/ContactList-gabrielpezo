import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { faLocationDot, faPhone, faEnvelope, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../store/appContext";
import "./ContactList.css"; 

export const ContactList = ({ contacts }) => {
  const { actions } = useContext(Context);

  const handleDelete = id => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      actions.contactDelete(id);
    }
  };

  if (!Array.isArray(contacts) || contacts.length === 0) {
    return <p>No contacts to show.</p>;
  }

  return (
    <div className="contact-list-container">
      <ul className="list-group">
        {contacts.map(contact => (
          <li key={contact.id} className="list-group-item contact-item">
            <div className="row align-items-center">
              <div className="col-2">
                <img
                  src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de.jpg"
                  className="rounded-circle mx-auto d-block contact-avatar"
                  alt="Avatar"
                />
              </div>
              <div className="col-6">
                <h5 className="contact-name">{contact.name}</h5>
                <p className="contact-detail">
                  <FontAwesomeIcon icon={faLocationDot} /> {contact.address}
                </p>
                <p className="contact-detail">
                  <FontAwesomeIcon icon={faPhone} /> {contact.phone}
                </p>
                <p className="contact-detail">
                  <FontAwesomeIcon icon={faEnvelope} /> {contact.email}
                </p>
              </div>
              <div className="col-4 text-right">
                <Link to={`/edit/${contact.id}`} className="btn btn-outline-secondary btn-sm mr-2">
                  <FontAwesomeIcon icon={faPencil} />
                </Link>
                <button 
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(contact.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
