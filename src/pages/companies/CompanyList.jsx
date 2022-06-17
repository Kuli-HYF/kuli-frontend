import { Link } from "react-router-dom";
import { index } from "../../data.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import { useParams } from "react-router-dom";

const CompanyList = ({ companies, selectedCompanies, resultsFound }) => {
  console.log(companies);

  let navigate = useNavigate();

  const handleLink = (event) => {
    const path = `/companies/${event.target.parentElement.id}`;
    setTimeout(navigate, 400, path);

    // index.id = event.target.parentElement.id
    // const companyToShow = companies.find(
    //   (el) => el.id === event.target.parentElement.id
    // );
    const companyToShow = companies.map(
      (el) => el.id === event.target.parentElement.id ? console.log(el[el.id]) : console.log("no")
    );

    // const company = companies.find((company) => company.id === Number(index.id));

    // index.data = companyToShow;

    // console.log(event.target.parentElement.id);
    console.log(companyToShow);
  };

  return (
    <>
      <div className="company-list-container">
        {resultsFound ? (
          <div className="companies-results-container">
            {selectedCompanies.map((el) => (
              <div className="company-list-item">
                {/* <Link to={`/companies/${el.id}`} state={{ companies }}> */}
                <p key={el.id}>{el.attributes.name}</p>
                {/* </Link> */}
              </div>
            ))}
          </div>
        ) : (
          <div className="companies-results-container">
            {companies.map((el) => (
              // <Link to={`/companies/${el.id}`} state={{ companies }}>
              <a id={el.id} onClick={handleLink}>
                <p key={el.id}>{el.attributes.name}</p>
              </a>
              // </Link>
            ))}
          </div>
        )}
      </div>
      {/* <Router>
        <Routes>
          <Route
            path="/companies/:companyName"
            element={
              <CompanyDetail
                company={companies.find(
                  (company) =>
                    String(company.attributes.name) === match.params.id
                )}
              />
            }
          />
        </Routes>
      </Router> */}
    </>
  );
};

export default CompanyList;
