import { useState } from 'react';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now() }]);
  };

  return (
    <div className="app">
      <h1>Contact Manager App</h1>
      <ContactForm addContact={addContact} />
    </div>
  );
}

export default App;
