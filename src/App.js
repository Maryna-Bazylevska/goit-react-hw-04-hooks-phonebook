import React, { Component } from "react";
import shortid from "shortid";
import "./App.css";
import Form from "./Components/Form";
import ContatctList from "./Components/ContactList";
import Filter from "./Components/Filter";
import Notification from "./Components/Notification";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    console.log("App componentDidMount");
    const saveContacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(saveContacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      name,
      number,
      id: shortid.generate(),
    };

    if (contacts.find((item) => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    this.setState({
      contacts: [contact, ...contacts],
    });
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        {contacts.length < 1 ? (
          <Notification text="Contact list is empty" />
        ) : (
          <div>
            <Filter value={filter} onChange={this.changeFilter} />

            <ContatctList
              items={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
