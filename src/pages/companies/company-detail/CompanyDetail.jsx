import "./CompanyDetail.css";

import Navigation from "../../../components/navigation/Navigation";
import { CompanyBadge } from "./CompanyBadge";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { get } from "../../../api/get";

const CompanyDetail = () => {
  // Companies array and company object
  const params = useParams;
  const companyId = params().id;
  // let location = useLocation();
  // let companies = location.state.companies;
  // const company = companies.find(
  //   (company) => Number(company.id) === Number(companyId)
  // );
  // console.log(company);
  // Companies array and company object

  const [company, setCompany] = useState("");
  const [badge, setBadge] = useState("");

  const fetchDataCompany = useCallback(async () => {
    const res1 = await get(`companies/${companyId}?populate=*`);
    setCompany(res1.data.attributes);
  }, [companyId]);

  const fetchDataBadge = useCallback(async () => {
    const res2 = await get(
      `companies/${companyId}?populate[badges][populate]=*`
    );
    setBadge(res2.data.attributes.badges.data);
  }, [companyId]);

  useEffect(() => {
    fetchDataCompany();
    fetchDataBadge();
  }, [fetchDataCompany, fetchDataBadge]);

  console.log(company);
  console.log("badge: ", badge);

  return (
    <div className="main-container">
      <Navigation />
      <div className="company-container">
        <div className="company-card">
          <div className="company-header__container">
            <div className="company-title__container">
              <h1 className="company-title">
                {company ? company.name : "Loading"}
              </h1>
            </div>
            <div>
              <a href={company ? company.webpage : "#"}>
                <p>
                  {company
                    ? company.webpage
                    : "Loading"}
                </p>
              </a>
            </div>
          </div>

          <div className="company-info__container">
            <div className="company-sector__container">
              <h3>Sectors:</h3>
              {company ? (
                company.sectors.data.map((el, i) => (
                  <div key={i} className="company-sector__list">
                    <p>{el.attributes.name}</p>
                  </div>
                ))
              ) : (
                <p>Try again</p>
              )}
            </div>
            <div className="company-badges">
              <h2>Badges:</h2>
              <div className="company-badges__container">
                {badge && badge.length > 0 ? (
                  badge.map((el, i) => <CompanyBadge badge={el} key={i} />)
                ) : (
                  <p>No badges have been awarded yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
