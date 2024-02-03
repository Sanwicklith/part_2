import { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import personServices from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        // const res = await axios.get("http://localhost:3001/persons");
        // const notes = res.data;
        const res = await personServices.getAll();
        const persons = res.data;
        setPersons(persons);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPersons();
  }, []);

  const addName = (name, number) => {
    if (persons.some((person) => person.name === name || person.number === number)) {
      const change = window.confirm(`${name} is already added to the phonebook. Do you want to override the number?`);
      if (change) {
        updateContact(name, number);
      }

      setNewName('');
      setNewNumber('');
      return;
    }

    const contactObj = {
      name,
      number,
    };

    personServices.create(contactObj).then((response) => {
      setPersons([...persons, response.data]);
    });

    setNewName('');
    setNewNumber('');
  };
  const updateContact = (name, number) => {
    const clonedPersons = persons.map((person) => (person.name === name ? { ...person, number } : person));
    setPersons(clonedPersons);
  };

  const deleteContact = (id) => {
    const confirmDelete = window.confirm('Are you sure?');
    if (confirmDelete) {
      personServices.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} />
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        addName={addName}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} removeContact={deleteContact} />
    </div>
  );
};

export default App;
