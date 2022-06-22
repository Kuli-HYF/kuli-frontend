import { Link } from "react-router-dom";
import CompanyListItem from "./CompanyListItem";

const CompanyList = ({ companies, selectedCompanies, resultsFound }) => {
  return (
    <>
      <div className="company-list-container">
        {resultsFound ? (
          <>
            <div className="companies-found">
              <p>{`Total companies found: ${selectedCompanies.length}`}</p>
            </div>
            {selectedCompanies.map((company) => (
              <div key={company.id} className="company-list-item">
                <Link to={`/companies/${company.id}`} state={{ companies }}>
                  <CompanyListItem company={company} />
                </Link>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="companies-found">
              <p>{`Total companies found: ${companies.length}`}</p>
            </div>
            {companies.map((company) => (
              <div key={company.id} className="company-list-item">
                <Link to={`/companies/${company.id}`} state={{ companies }}>
                  <CompanyListItem company={company} />
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default CompanyList;
