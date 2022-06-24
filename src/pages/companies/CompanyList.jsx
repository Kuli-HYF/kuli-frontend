import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CompanyListItem from "./CompanyListItem";

const CompanyList = ({
  companies,
  selectedCompanies,
  handleOrder

}) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    let endOffset = itemOffset + itemsPerPage;
    setCurrentItems(selectedCompanies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(selectedCompanies.length / itemsPerPage));
    if (selectedCompanies.length < 8) {
      setItemOffset(0);
    }
  }, [itemOffset, itemsPerPage, selectedCompanies]);

  const handlePageClick = (event) => {
    let newOffset = (event.selected * itemsPerPage) % selectedCompanies.length;

    setItemOffset(newOffset);

    console.log(pageCount);
  };

  return (
    <>
      <div className="company-list-container">
        <>
          <div className="company-list-topbar">
            <p>{`Total companies found: ${selectedCompanies.length}`}</p>
            <button className="company-order-button" onClick={handleOrder}>
              A ⇄ Z
            </button>
          </div>
          {currentItems.map((company) => (
            <div key={company.id} className="company-list-item">
              <Link to={`/companies/${company.id}`} state={{ companies }}>
                <CompanyListItem company={company} />
              </Link>
            </div>
          ))}
        </>
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
