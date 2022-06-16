const CompanySearch = ({
  search,
  getInput,
  selectedBadges,
  selectedSectors,
}) => {
  return (
    <>
      <div className="company-search-container">
        <input
          type="input"
          value={search}
          onChange={getInput}
          placeholder="search"
        ></input>
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
