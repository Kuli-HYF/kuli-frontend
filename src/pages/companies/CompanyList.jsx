import { Link } from "react-router-dom";
import CompanyListItem from "./CompanyListItem";

const CompanyList = ({ companies, selectedCompanies, resultsFound }) => {
  return (
    <>
      <div className="company-list-container">
        {resultsFound ? (
          <div className="companies-results-container">
            {selectedCompanies.map((company) => (
              <div key={company.id} className="company-list-item">
                <Link to={`/companies/${company.id}`} state={{ companies }}>
                  <CompanyListItem company={company}/>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="companies-results-container">
            {companies.map((company) => (
              <div key={company.id} className="company-list-item">
                <Link to={`/companies/${company.id}`} state={{ companies }}>
                  <CompanyListItem company={company}/>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CompanyList;
