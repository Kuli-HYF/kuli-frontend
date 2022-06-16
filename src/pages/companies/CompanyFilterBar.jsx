import CompanyFilter from "./CompanyFilter";
import SectorFilter from "./SectorFilter";

const CompanyFilterBar = ({
  badges,
  sectors,
  handleOnChange,
  handleSectors,
  selectedBadges,
}) => {
  return (
    <>
      <div className="filters-container">
        <div className="company-filter-container">
          <CompanyFilter
            badges={badges}
            handleOnChange={handleOnChange}
            selectedBadges={selectedBadges}
          />
        </div>
        <div className="sector-filter-container">
          <SectorFilter sectors={sectors} handleSectors={handleSectors} />
        </div>
      </div>
    </>
  );
};

export default CompanyFilterBar;
