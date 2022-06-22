const CompanyListItem = ({ company }) => {
  return (
    <>
      <h4 className="company-list-title">{company.attributes.name}</h4>
      <hr className="line"></hr>
      <p className="company-list-location">{company.attributes.location.address}</p>
      <p className="company-list-website">{company.attributes.webpage}</p>
    </>
  );
};

export default CompanyListItem;
