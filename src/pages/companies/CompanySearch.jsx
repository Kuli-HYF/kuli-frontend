const CompanySearch = ({ search, getInput }) => {
  return (
    <div className="company-search-container">
      <input type="input" value={search} onChange={getInput}></input>
    </div>
  );
};

export default CompanySearch;
