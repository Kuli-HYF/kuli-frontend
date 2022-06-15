const CompanyFilter = ({ badges, handleOnChange }) => {
  return (
    <div className="badges-dropdown-container">
      Select badges:
      {badges.length > 0 && (
        <ul className="badges-dropdown-list">
          {badges.map((el) => (
            <li key={el.id}>
              <label>
                <input
                  type="checkbox"
                  value={el.attributes.name}
                  id={el.id}
                  onChange={handleOnChange}
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

export default CompanyFilter;
