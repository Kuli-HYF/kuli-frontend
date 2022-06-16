import "./AboutUs.css";

import { useState, useEffect } from "react";
import { get } from "../../api/get.js";
import Navigation from "../../components/navigation/Navigation";

export const AboutUs = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    const result = await get("about-us");
    setData(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="about-us__main-container">
      <Navigation />
      {data ? (
        <div className="about-us__container">
          <div className="about-us__title-container">
            <h2 className="about-us__title">{data.attributes.Title}</h2>
          </div>
          <div className="about-us__body-text__container">
            <p className="about-us__body-text">{data.attributes.bodyText}</p>
          </div>
        </div>
      ) : (
        <p>Please, try again later.</p>
      )}
    </div>
  );
};
