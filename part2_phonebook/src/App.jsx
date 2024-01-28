import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(null);

  const addName = (e) => {
    e.preventDefault();
    if (
      persons.some(
        (person) => person.name === newName || person.number === newNumber
      )
    ) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    const contactObj = {
      name: newName,
      number: newNumber,
    };

    setPersons([...persons, contactObj]);
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label htmlFor="search">Filter shown with</label>{" "}
        <input type="text" id="search" />
      </div>
      <div>
        <h2>Add a New</h2>
      </div>

      <form onSubmit={addName}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <p key={i}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
