import List from "./List";
import ListItem from "./ListItem";
import CompanySearch from "./CompanySearch";

const CompanyFilterBar = ({
  badges,
  sectors,
  handleBadges,
  handleSectors,
  handleInput,
  selectedBadges,
  selectedSectors,
  searchInput,
  checked,
}) => {
  return (
    <>
      <div className="filters-container">
        <CompanySearch
          selectedBadges={selectedBadges}
          selectedSectors={selectedSectors}
          value={searchInput}
          handleInput={handleInput}
        />

        <List title={"filter badges"}>
          <ListItem
            object={badges}
            handleOnChange={handleBadges}
            checked={checked}

            // selectedBadges={selectedBadges}
          />
        </List>

        <hr className="filter-line"></hr>

        <List title={"filter sectors"}>
          <ListItem
            object={sectors}
            handleOnChange={handleSectors}
            // selectedBadges={selectedBadges}
          />
        </List>
      </div>
    </>
  );
};

export default CompanyFilterBar;
