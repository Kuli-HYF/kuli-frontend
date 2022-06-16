const CompanyFilter = ({ badges, handleOnChange, selectedBadges }) => {
  console.log(selectedBadges);
  return (
    <>
      <div className="badges-container">
        {selectedBadges.map((el, i) => (
          <div className="filter-badge" key={i}><p >{el}</p></div>
        ))}
      </div>
      <div className="badges-dropdown-container">
        <h4>Select badges:</h4>
        {
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
        }
      </div>
    </>
  );
};

export default CompanyFilter;
