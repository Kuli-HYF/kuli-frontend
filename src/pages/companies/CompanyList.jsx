import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
import CompanyListItem from "./CompanyListItem";

const CompanyList = ({ companies, selectedCompanies, handleOrder }) => {
  // const [currentItems, setCurrentItems] = useState([]);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // const [currentPage, setCurrentPage] = useState(-1);
  // const itemsPerPage = 8;

  // useEffect(() => {
  //   // Fetch items from another resources.
  //   let endOffset = 0;

  //   if (selectedCompanies.length < 8) {
  //     endOffset = 8;
  //     setItemOffset(0);
  //     setPageCount(0);
  //   } else {
  //     endOffset = itemOffset + itemsPerPage;
  //   }
  //   console.log("pagecount: " + pageCount);
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  //   setCurrentItems(selectedCompanies.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(selectedCompanies.length / itemsPerPage));

  // }, [itemOffset, itemsPerPage, selectedCompanies]);

  // // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   const newOffset =
  //     (event.selected * itemsPerPage) % selectedCompanies.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };

  return (
    <>
      <div className="company-list-container">
        <>
          <div className="company-list-topbar">
            <p>{`Total companies found: ${selectedCompanies.length}`}</p>
            {/* <button className="company-order-button" onClick={handleOrder}>
              A ⇄ Z
            </button> */}
          </div>
          {selectedCompanies.map((company) => (
            <div key={company.id} className="company-list-item">
              <Link to={`/companies/${company.id}`} state={{ companies }}>
                <CompanyListItem company={company} />
              </Link>
            </div>
          ))}
        </>
        {/* <div className="company-paginate-wrapper">
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
            // forcePage={currentPage}
          />
        </div> */}
      </div>
    </>
  );
};

export default CompanyList;
