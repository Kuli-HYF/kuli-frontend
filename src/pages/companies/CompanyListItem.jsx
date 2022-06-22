const CompanyListItem = ({ company }) => {
  console.log(company.attributes.badges.data);
  return (
    <>
      <div className="company-list-header">
        <h4 className="company-list-title">{company.attributes.name}</h4>

        <div className="company-list-image-container">
          {company.attributes.badges.data.map((el) => (
            <img
              className="company-list-image"
              src={el.attributes.image.data.attributes.formats.small.url}
            ></img>
          ))}
        </div>
      </div>

      <hr className="line"></hr>
      <p className="company-list-location">
        {company.attributes.location.address}
      </p>
      <p className="company-list-website">{company.attributes.webpage}</p>

      <img className="" src={""} alt=""></img>
    </>
  );
};

export default CompanyListItem;
