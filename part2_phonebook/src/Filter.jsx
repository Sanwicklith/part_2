const Filter = ({ search, setSearch }) => {
  return (
    <div>
      <label htmlFor="search">Filter shown with</label>{" "}
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Filter;
