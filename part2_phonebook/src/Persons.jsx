const Persons = ({ filteredPersons, removeContact }) => {
  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.id} className="contact">
          {person.name} {person.number}
          <span>
            <button
              onClick={() => {
                removeContact(person.id);
                console.log(person.id);
              }}
            >
              Delete
            </button>
          </span>
        </p>
      ))}
    </div>
  );
};

export default Persons;
