import "./CompanyDetail.css";

import Navigation from "../../../components/navigation/Navigation";
import { CompanyBadge } from "./CompanyBadge";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { get } from "../../../api/get";
import Footer from "../../../components/footer/Footer";

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

  // console.log(company);
  // console.log("badge: ", badge);

  return (
    <div className="main-container">
      <Navigation />
      <div className="company-detail-container">
        <div className="company-card">
          <div className="company-header__container">
            <div className="company-title__container">
              <h2 className="company-title">
                {company ? company.name : "Loading"}
              </h2>
            </div>

            <hr className="company-detail-line"></hr>

            <div>
              <p className="company-detail-address">
                {company ? company.location.address : "Loading"}
              </p>
            </div>
            <div>
              <a href={company ? company.webpage : "#"}>
                <p>{company ? company.webpage : "Loading"}</p>
              </a>
            </div>

            <div className="company-sector__container">
              <h3 className="company-detail-sectors-title">Sectors:</h3>
              <div className="company-sector-list-container">
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
            </div>
          </div>

          <div className="company-info__container">
            <div className="company-badges">
              <h3 className="company-detail-badges-title">Badges:</h3>
              <hr className="company-detail-badges-line"></hr>

              <div className="company-badges__container">
                {badge && badge.length > 0 ? (
                  badge.map((el, i) => <CompanyBadge badge={el} key={i} />)
                ) : (
                  <p className="no-badges">No badges have been awarded yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default CompanyDetail;
