const CompanySearch = ({
  handleInput,
  search,
  selectedBadges,
  selectedSectors,
  value,
}) => {
  return (
    <>
      <div className="company-search-container">
        <input
          className="search-input"
          type="input"
          value={search}
          onChange={handleInput}
          placeholder="Search"
        ></input>

        {/* {value && <div className="search-output-container">{`you searched for: ${value}`}</div>} */}

        <div className="badges-container">
          {selectedBadges.map((el, i) => (
            <div
              className={el.split(" ")[0].replace(",", "") + " filter-badge"}
              key={i}
            >
              <p className="filter-name">{el}</p>
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
