import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CompanyListItem from "./CompanyListItem";

const CompanyList = ({ companies, selectedCompanies, resultsFound }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    let endOffset = itemOffset + itemsPerPage;
    if (resultsFound) {
      setCurrentItems(selectedCompanies.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(selectedCompanies.length / itemsPerPage));
    } else {
      setCurrentItems(companies.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(companies.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, companies, selectedCompanies, resultsFound]);

  const handlePageClick = (event) => {
    if (resultsFound) {
      let newOffset =
        (event.selected * itemsPerPage) % selectedCompanies.length;
      setItemOffset(newOffset);
    } else {
      let newOffset = (event.selected * itemsPerPage) % companies.length;
      setItemOffset(newOffset);
    }
  };

  return (
    <>
      <div className="company-list-container">
        {resultsFound ? (
          <>
            <div className="companies-found">
              <p>{`Total companies found: ${selectedCompanies.length}`}</p>
            </div>
            {currentItems.map((company) => (
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
            {currentItems.map((company) => (
              <div key={company.id} className="company-list-item">
                <Link to={`/companies/${company.id}`} state={{ companies }}>
                  <CompanyListItem company={company} />
                </Link>
              </div>
            ))}
          </>
        )}
        <div className="company-paginate-wrapper">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="company-paginate-container"
            // initialPage={1}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyList;
