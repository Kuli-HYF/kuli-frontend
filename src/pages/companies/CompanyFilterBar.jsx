import CompanyFilterBar from "./CompanyFilter";

const CompanyFilter = ({badges, handleOnChange}) => {
  return (
    <div className="company-filter-container">
      company-filter
      <CompanyFilter badges={badges} handleOnChange={handleOnChange}/>
    </div>
  );
};

export default CompanyFilterBar;
