import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');
  const [latestID, setLatestID] = useState(5);

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
