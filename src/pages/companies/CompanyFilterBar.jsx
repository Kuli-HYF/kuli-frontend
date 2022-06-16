import List from "./List";
import ListItem from "./ListItem";

const CompanyFilterBar = ({
  badges,
  sectors,
  handleBadges,
  handleSectors,
  selectedBadges,
}) => {
  return (
    <>
      <div className="filters-container">
        <List title={"filter badges"}>
          <ListItem
            object={badges}
            handleOnChange={handleBadges}
            // selectedBadges={selectedBadges}
          />
        </List>

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
