const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		contacts: []
	  },
	  actions: {
		contactFetch: () => {
		  fetch("https://playground.4geeks.com/contact/agendas/gabrielContact/contacts")
			.then(res => res.json())
			.then(data => {
			  setStore({ contacts: data });
			})
			.catch(error => {
			  console.error("Error fetching contacts:", error);
			});
		},
		contactCreate: newContact => {
		  return fetch("https://playground.4geeks.com/contact/agendas/gabrielContact/contacts", {
			method: "POST",
			headers: {
			  "Content-Type": "application/json"
			},
			body: JSON.stringify(newContact)
		  })
		  .then(res => res.json())
		  .then(data => {
			let currentContacts = getStore().contacts;
			if (!Array.isArray(currentContacts)) {
			  currentContacts = [];
			}
			setStore({ contacts: [...currentContacts, data] });
		  })
		  .catch(error => {
			console.error("Error creating contact:", error);
			throw error;
		  });
		},
		contactUpdate: (id, updatedContact) => {
		  return fetch(`https://playground.4geeks.com/contact/agendas/gabrielContact/contacts/${id}/`, {
			method: "PUT",
			headers: {
			  "Content-Type": "application/json"
			},
			body: JSON.stringify(updatedContact)
		  })
		  .then(res => res.json())
		  .then(data => {
			const updatedContacts = getStore().contacts.map(contact =>
			  contact.id === parseInt(id) ? data : contact
			);
			setStore({ contacts: updatedContacts });
		  })
		  .catch(error => {
			console.error("Error updating contact:", error);
			throw error;
		  });
		},
		contactDelete: id => {
		  return fetch(`https://playground.4geeks.com/contact/agendas/gabrielContact/contacts/${id}/`, {
			method: "DELETE"
		  })
		  .then(() => {
			const updatedContacts = getStore().contacts.filter(
			  contact => contact.id !== parseInt(id)
			);
			setStore({ contacts: updatedContacts });
		  })
		  .catch(error => {
			console.error("Error deleting contact:", error);
			throw error;
		  });
		}
	  }
	};
  };
  
  export default getState;
