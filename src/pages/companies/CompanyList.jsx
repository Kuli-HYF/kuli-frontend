const CompanyList = ({ companies, selectedCompanies, selectedBadges, searchInput, resultsFound }) => {
  return (
    <>
      <div className="company-list-container">
        {resultsFound ? (
          <div className="companies-results-container">
            {selectedCompanies.map((el) => (
              <p key={el.id}>{el.attributes.name}</p>
            ))}
          </div>
        ) : (
          <div className="companies-results-container">
            {companies.map((el) => (
              <p key={el.id}>{el.attributes.name}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CompanyList;
