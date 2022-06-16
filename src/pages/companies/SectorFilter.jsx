const SectorFilter = ({ sectors, handleSectors }) => {
  return (
    <div className="badges-dropdown-container">
      <h4>Select sectors:</h4>
      {sectors.length > 0 && (
        <ul className="badges-dropdown-list">
          {sectors.map((el) => (
            <li key={el.id}>
              <label>
                <input
                  type="checkbox"
                  value={el.attributes.name}
                  id={el.id}
                  onChange={handleSectors}
                />
                {el.attributes.name}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SectorFilter;
