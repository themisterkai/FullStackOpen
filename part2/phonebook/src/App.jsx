import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');
  const [latestID, setLatestID] = useState(5);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data));
  }, []);

  const addNameHandler = e => {
    e.preventDefault();

    if (newName === '' || newPhone === '') {
      alert('please enter a valid name or phone number');
      return;
    }
    const isNameUnique = persons.find(
      person => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (isNameUnique == null) {
      setPersons([
        ...persons,
        { name: newName, number: newPhone, id: latestID },
      ]);
      setLatestID(latestID + 1);
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
  };

  const filteredList =
    filter === ''
      ? persons
      : persons.filter(person =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={e => setFilter(e.target.value)} />
      <h2>add a new</h2>
      <PersonForm
        addNameHandler={addNameHandler}
        newName={newName}
        newPhone={newPhone}
        nameOnChange={e => setNewName(e.target.value)}
        phoneOnChange={e => setNewPhone(e.target.value)}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredList} />
    </div>
  );
};

export default App;
