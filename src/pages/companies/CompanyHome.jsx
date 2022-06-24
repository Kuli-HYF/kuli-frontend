import "./company-home.css";

import { get } from "../../api/get";
import { useState, useEffect } from "react";

import CompanyHeader from "./CompanyHeader";
import Navigation from "../../components/navigation/Navigation";
import CompanyList from "./CompanyList";
import CompanyFilterBar from "./CompanyFilterBar";
import { useCallback } from "react";

const CompanyHome = () => {
  const [searchInput, setSearchInput] = useState("");
  const [companies, setCompanies] = useState([]);
  const [badges, setBadges] = useState([]);
  const [selectedBadges, setSelectedBadges] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState(companies);
  // const [order, setOrder] = useState(false);
  // const [count, setCount] = useState(1);
  // const [checked, setChecked] = useState(false)

  const fetchCompanies = async () => {
    // const sort = order ? "desc" : "asc";
    // const pageStart = 1;
    // const pageCount = 4;
    // console.log(sort);
    const result = await get(
      // `companies?sort[0]=name:${sort}&pagination[page]=${count}&pagination[pageSize]=${pageCount}&populate[badges][populate]=*&populate[location][populate]=*&populate[sectors][populate]=*`

      `companies?sort[0]=name:asc&populate[badges][populate]=*&populate[location][populate]=*&populate[sectors][populate]=*`
    );
    setCompanies(result.data);
    // console.log(result.data);
  };

  const fetchBadges = async () => {
    const result = await get("badges?populate=*");
    setBadges(result.data);
  };

  const fetchSectors = async () => {
    const result = await get("sectors");
    setSectors(result.data);
  };

  useEffect(() => {
    fetchCompanies();
    fetchBadges();
    fetchSectors();
  }, []);

  // useEffect(() => {
  //   fetchCompanies();
  // }, [order]);

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  // const handleOrder = () => {
  //   setOrder(!order);
  //   fetchCompanies();
  //   // console.log(order);
  // };

  const handleBadges = (e) => {
    const { checked, value } = e.target;
    const badgeId = e.currentTarget.id;
    const badgeNumber = parseInt(badgeId, 10);

    console.log("badge number: " + badgeNumber);

    if (checked) {
      setSelectedBadges((selectedBadges) => [...selectedBadges, value]);
    } else {
      setSelectedBadges(selectedBadges.filter((e) => e !== value));
    }
  };

  const handleSectors = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setSelectedSectors((selectedSectors) => [...selectedSectors, value]);
    } else {
      setSelectedSectors(selectedSectors.filter((e) => e !== value));
    }
  };

  // const clearFilters = () => {
  //   setChecked(false);
  // };

  const applyFilters = useCallback(() => {
    let filteredCompanies = companies;

    if (selectedBadges.length > 0) {
      filteredCompanies = filteredCompanies.filter((company) =>
        company.attributes.badges.data.some((badge) =>
          selectedBadges.includes(badge.attributes.name)
        )
      );
    }

    if (selectedSectors.length > 0) {
      filteredCompanies = filteredCompanies.filter((sector) =>
        sector.attributes.sectors.data.some((sector) =>
          selectedSectors.includes(sector.attributes.name)
        )
      );
    }

    if (searchInput) {
      filteredCompanies = filteredCompanies.filter((company) =>
        company.attributes.name
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    }

    setSelectedCompanies(filteredCompanies);

    !searchInput.length && !selectedBadges.length && !selectedSectors.length
      ? setSelectedCompanies(companies)
      : setSelectedCompanies(filteredCompanies);
  }, [companies, searchInput, selectedBadges, selectedSectors]);

  useEffect(() => {
    applyFilters();
  }, [selectedBadges, selectedSectors, searchInput, applyFilters]);

  // const handleCountNext = () => {
  //   setCount(count + 1);
  //   fetchCompanies();
  // };

  // const handleCountPrevious = () => {
  //   setCount(count - 1);
  //   fetchCompanies();
  // };

  return (
    <>
      <Navigation />
      <div className="company-container">
        <div className="company-content-container">
          <CompanyHeader />
          {/* 
          <button onClick={handleCountNext}>next</button>
          <button onClick={handleCountPrevious}>previous</button> */}

          <div className="company-filter-and-list-container">
            <CompanyFilterBar
              badges={badges}
              sectors={sectors}
              handleBadges={handleBadges}
              handleSectors={handleSectors}
              selectedBadges={selectedBadges}
              selectedSectors={selectedSectors}
              handleInput={handleInput}
              searchInput={searchInput}
            />

            <CompanyList
              companies={companies}
              selectedCompanies={selectedCompanies}
              searchInput={searchInput}
              // handleOrder={handleOrder}
            />
          </div>
          {/* <button onClick={clearFilters}></button> */}
        </div>
      </div>
    </>
  );
};

export default CompanyHome;
