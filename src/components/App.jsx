import React, { useEffect, useState } from 'react';
import { ContactsList } from './contactsList/contactsList';
import Form from './form/form';
import { Filter } from './filter/filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts') ?? '')
    //виклик анонімної фу - при перезавантаж не буде очистки localeStorage
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const checkContact = (nameContact, contacts) => {
    return contacts.find(item => {
      return item.name.toLowerCase() === nameContact.toLowerCase();
    });
  };

  const formSubmitHandler = newContact => {
    if (checkContact(newContact.name, contacts)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prev => [...prev, newContact]);
  };

  const onChangeFilter = value => {
    setFilter(value);
  };

  //фу видалення контакту по id
  const onDeleteContact = idContact => {
    // змінює стан contacts
    setContacts(contacts.filter(item => item.id !== idContact));
  };

  const onContacts = filter => {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(item => {
        return item.name.includes(filter.toLowerCase());
      });
    }
  };

  return (
    <div>
      <h2> Phonebook</h2>
      <Form onSubmitForm={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={onChangeFilter} />
      <ContactsList list={onContacts(filter)} onDelete={onDeleteContact} />
    </div>
  );
};

export default App;
