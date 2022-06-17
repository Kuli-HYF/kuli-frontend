const CompanySearch = ({
  handleInput,
  search,
  selectedBadges,
  selectedSectors,
  value
}) => {
  return (
    <>
      <div className="company-search-container">
        <input className="search-input"
          type="input"
          value={search}
          onChange={handleInput}
          placeholder="search"
        ></input>

        {value && <div className="search-output-container">{`you searched for: ${value}`}</div>}

        <div className="badges-container">
          {selectedBadges.map((el, i) => (
            <div className="filter-badge" key={i}>
              <p>{el}</p>
            </div>
          ))}
          {selectedSectors.map((el, i) => (
            <div className="filter-badge" key={i}>
              <p>{el}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompanySearch;
