import { useParams, useLocation } from "react-router-dom";

const CompanyDetail = () => {
  const params = useParams;
  const companyId = params().id;

  let location = useLocation();
  let companies = location.state.companies;

  const company = companies.find((company) => company.id == companyId);

  // console.log(company);

  return (
    <>
      <div>company detail</div>

      <div>{company.id}</div>
      <div>{company.attributes.name}</div>
      <div>{company.attributes.webpage}</div>

      <div>
        <h5>Sectors:</h5>
        {company.attributes.sectors.data.map((el, i) => (
          <ul key={i}>
            <li>{el.attributes.name}</li>
          </ul>
        ))}
      </div>

      <div>
        <h5>Badges:</h5>
        {company.attributes.badges.data.map((el, i) => (
          <ul key={i}>
            <li>{el.attributes.name}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default CompanyDetail;
