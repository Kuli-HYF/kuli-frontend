const CompanyListItem = ({company}) => {
  return (
    <>
      <h4 className="company-list-title">{company.attributes.name}</h4>
    </>
  );
};

export default CompanyListItem;
