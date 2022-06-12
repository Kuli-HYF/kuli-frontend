import "./company.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get } from "../../api/get";

import Navigation from "../../components/navigation/Navigation";

import { Button } from "../../components/button/Button";

const CompanyStart = () => {
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    const result = await get("companies");
    setCompanies(result.data);
  };

  useEffect(() => {
    fetchCompanies();
    console.log(companies);
  }, []);

  // const handleGet = async (event) => {
  //   const search = event.target.parentElement.children[0].value;
  //   const companiesUrl = "companies";
  //   const result = await get(search);
  //   console.log("get", result);
  // };

  return (
    <>
      <Navigation />
      <div className="companies-container">
        <div className="intro-container">
          <h2 className="companies-title">Search for a company</h2>
          <p className="companies-intro-paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            blanditiis magni sequi pariatur natus culpa neque reiciendis soluta,
            ipsam aperiam quas ad vel ducimus debitis quos rerum, consequuntur
            eum facilis.
          </p>

          {/* <Link to={"/"}>
            <Button title="home" color="temp-button dark-pink" />
          </Link> */}
          <input type="input"></input>
          {/* <Button color="blue" action={handleGet} title="get" /> */}
        </div>
      </div>
    </>
  );
};

export default CompanyStart;
