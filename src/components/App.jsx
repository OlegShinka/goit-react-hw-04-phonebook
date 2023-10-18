import React, { Component } from 'react';
import { ContactsList } from './contactsList/contactsList';
import Form from './form/form';
import { Filter } from './filter/filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const parseContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState(prevState => ({
      contacts: prevState.contacts,
    }));
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  checkContact = (nameContact, contacts) => {
    return contacts.find(item => {
      return item.name.toLowerCase() === nameContact.toLowerCase();
    });
  };

  formSubmitHandler = newContact => {
    if (this.checkContact(newContact.name, this.state.contacts)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };
  onChangeFilter = value => {
    this.setState({ filter: value });
  };

  //фу видалення контакту по id
  onDeleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== idContact),
    }));
  };

  onContacts = filter => {
    if (filter === '') {
      return this.state.contacts;
    } else {
      return this.state.contacts.filter(item => {
        return item.name.includes(filter.toLowerCase());
      });
    }
  };
  //useState сніппет
  render() {
    const { filter } = this.state;

    // const visibleContact = contacts.filter(contact =>
    //   contact.name.includes(filter)
    // );
    return (
      <div>
        <h2> Phonebook</h2>
        <Form onSubmitForm={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
        <ContactsList
          list={this.onContacts(filter)}
          onDelete={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
