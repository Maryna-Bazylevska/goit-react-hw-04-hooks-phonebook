import { useState, useEffect } from "react";
import shortid from "shortid";
import "./App.css";
import Form from "./Components/Form";
import ContatctList from "./Components/ContactList";
import Filter from "./Components/Filter";
import Notification from "./Components/Notification";
export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("contacts")) ?? [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
    );
  });
  const [filter, setFilter] = useState("");
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: shortid.generate(),
    };

    if (contacts.find((item) => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    setContacts([contact, ...contacts]);
  };
  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };
  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      {contacts.length < 1 ? (
        <Notification text="Contact list is empty" />
      ) : (
        <div>
          <Filter value={filter} onChange={changeFilter} />

          <ContatctList
            items={filterContacts()}
            onDeleteContact={deleteContact}
          />
        </div>
      )}
    </div>
  );
}
