import "./company.css";
import { useState, useEffect } from "react";
import { get } from "../../api/get";

import Navigation from "../../components/navigation/Navigation";


const CompanyStart = () => {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");

  const fetchCompanies = async () => {
    const result = await get("companies?populate=*");
    setCompanies(result.data);
  };

  useEffect(() => {
    if (!search.length > 0) {
      fetchCompanies();

      console.log(companies);
    }
  }, [search]);

  // const getCompanyInput = (e) => {
  //   setSearch(search)
  //   console.log("search :" + search)
  // }

  useEffect(() => {
    if (search.length > 0) {
      let filteredCompanies = companies.filter((company) =>
        company.attributes.name.toLowerCase().includes(search.toLowerCase())
      );

      setCompanies(filteredCompanies);
      // console.log(filteredCompanies);
    }
  }, [search]);

  // const handleGet = async () => {
  //   const result = await get(search);
  //   console.log("get", result);
  //   console.log("search: " + search);
  //   setCompanies(result.data);
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
          <input
            type="input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          {/* <Button color="blue" action={handleGet} title="get" /> */}
          {companies.length > 0 && (
            <div className="companies-results-container">
              {companies.map((el) => (
                <p key={el.id}>{el.attributes.name}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyStart;
