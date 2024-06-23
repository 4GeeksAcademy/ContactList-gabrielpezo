import React, { useContext, useEffect } from "react";
import { ContactList } from "../component/contactList";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.contacts.length === 0) {
      actions.contactFetch();
    }
  }, [actions, store.contacts.length]);

  return (
    <div className="mt-5 container">
      <h1>Contact List</h1>
      <ContactList contacts={store.contacts || []} />
    </div>
  );
};