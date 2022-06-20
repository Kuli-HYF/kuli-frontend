import "./AboutUs.css";

import { useState, useEffect } from "react";
import { get } from "../../api/get.js";
import Navigation from "../../components/navigation/Navigation";

import AboutUsCard from "./AboutUsCard";

export const AboutUs = () => {
  const [teamMembers, setTeamMembers] = useState("");

  const fetchTeamMembers = async () => {
    const result = await get("about-us?populate[teamMembers][populate]=*");
    setTeamMembers(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    fetchTeamMembers();
    // console.log(teamMembers);
  }, []);

  // const fetchData = async () => {
  //   const result = await get("about-us");
  //   setData(result.data);
  //   // console.log(result.data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="about-us__main-container">
      <Navigation />
      {teamMembers ? (
        <div className="about-us__container">
          <div className="about-us__title-container">
            <h2 className="about-us__title">{teamMembers.attributes.Title}</h2>
          </div>
          <div className="about-us__body-text__container">
            <p className="about-us__body-text">
              {teamMembers.attributes.bodyText}
            </p>
          </div>
          <div className="about-us__row-container">
            {teamMembers ? (
              teamMembers.attributes.teamMembers.map((teamMember) => (
                <AboutUsCard key={teamMember.id} teamMember={teamMember} />
              ))
            ) : (
              <div>loading</div>
            )}
          </div>
        </div>
      ) : (
        <p>Please, try again later.</p>
      )}
    </div>
  );
};
