const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  addName,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    addName(newName, newNumber);
  };

  return (
    <form onSubmit={submitHandler}>
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
  );
};

export default PersonForm;
