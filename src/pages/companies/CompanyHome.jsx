import "./company-home.css";
import "./company.css"

import { get } from "../../api/get";

import { useState, useEffect } from "react";
import Navigation from "../../components/navigation/Navigation";
import CompanySearch from "./CompanySearch";
import CompanyList from "./CompanyList";
import CompanyFilterBar from "./CompanyFilterBar";

const CompanyHome = () => {
  const [searchInput, setSearchInput] = useState("");
  const [companies, setCompanies] = useState([]);
  const [badges, setBadges] = useState([]);
  const [selectedBadges, setSelectedBadges] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);

  const fetchCompanies = async () => {
    const result = await get("companies?populate=*");
    setCompanies(result.data);
  };

  const fetchBadges = async () => {
    const result = await get("badges");
    setBadges(result.data);
  };

  useEffect(() => {
    if (!undefined) {
      fetchCompanies();
      fetchBadges();
    }
  }, []);

  useEffect(() => {
    if (companies.length !== 0) {
      setCompanies(companies);
      // console.log(companies);
      setBadges(badges);
      // console.log(badges);
      // console.log(selectedBadges);
      // console.log(companies[11].attributes.badges.data);

      // console.log(companies.attributes);
    }
  }, [companies, badges, selectedBadges]);

  const handleOnChange = (e) => {
    const { checked, value } = e.target;
    const badgeId = e.currentTarget.id;
    const badgeNumber = parseInt(badgeId, 10);

    // console.log(checked, value);
    // console.log(e.target);
    // console.log("checked: " + checked);
    // console.log("value: " + value);
    // console.log("badge id: " + badgeId);
    // console.log("badge number: " + badgeNumber);

    if (checked) {
      setSelectedBadges((selectedBadges) => [...selectedBadges, badgeNumber]);
    } else {
      setSelectedBadges(selectedBadges.filter((e) => e !== badgeNumber));
    }
  };

  const applyFilters = () => {
    fetchCompanies();
    setCompanies(companies);

    let filteredCompanies = companies.filter((company) =>
      company.attributes.badges.data.some((badge) =>
        selectedBadges.includes(badge.id)
      )
    );
    setSelectedCompanies(filteredCompanies);
    // console.log(filteredCompanies);
    setCompanies(filteredCompanies);

    if (selectedBadges.length === 0) {
      setCompanies(companies);
    }

    if (searchInput.length > 0) {
      let filteredCompanies = companies.filter((company) =>
        company.attributes.name
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
      setSelectedCompanies(filteredCompanies);
      // setCompanies(filteredCompanies);
      // console.log(filteredCompanies);
    }

    if (searchInput.length === 0) {
      fetchCompanies();
      setSelectedCompanies(filteredCompanies);

      // setCompanies(companies);
    }

    !searchInput.length && !selectedBadges.length
      ? setResultsFound(false)
      : setResultsFound(true);
  };

  useEffect(() => {
    setSelectedCompanies(selectedCompanies);
    setSelectedBadges(selectedBadges);
    // setCompanies(companies)

    applyFilters();
  }, [selectedBadges, searchInput]);

  return (
    <>
      <Navigation />
      <div className="company-container">
        <CompanySearch
          value={searchInput}
          getInput={(e) => setSearchInput(e.target.value)}
        />
        <p>{searchInput}</p>
        <div className="company-filter-and-list-container">
          <CompanyFilterBar badges={badges} handleOnChange={handleOnChange} />
          <CompanyList
            companies={companies}
            selectedCompanies={selectedCompanies}
            selectedBadges={selectedBadges}
            searchInput={searchInput}
            resultsFound={resultsFound}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyHome;
