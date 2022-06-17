import { Link } from "react-router-dom";

const CompanyList = ({ companies, selectedCompanies, resultsFound }) => {
  return (
    <>
      <div className="company-list-container">
        {resultsFound ? (
          <div className="companies-results-container">
            {selectedCompanies.map((el) => (
              <div className="company-list-item">
                <Link to={`/companies/${el.id}`} state={{ companies }}>
                  <p key={el.id}>{el.attributes.name}</p>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="companies-results-container">
            {companies.map((el, i) => (
              <Link key={i} to={`/companies/${el.id}`} state={{ companies }}>
                <p key={el.id}>{el.attributes.name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CompanyList;
