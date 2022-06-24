import "./FormStart.css";

import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import Navigation from "../../components/navigation/Navigation";
import { Title } from "./title/Title.jsx";
import { Text } from "./text/Text.jsx";
import { Badge } from "./badge/Badge.jsx";
import React, { useState, useEffect } from "react";
import { get } from "../../api/get.js";

import { useGlobalState } from "../../global";

const FormStart = () => {
  const login = useGlobalState("userLoggedIn");

  const [data, setData] = useState("");
  const fetchData = async () => {
    const result = await get("intropage?populate[badge][populate]=badgeImg");
    setData(result.data.attributes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data.badge);

  return (
    <div className="container">
      <Navigation />
      <div className="survey-intro__container fadeIn">
        <Title title={data.title} />
        <div className="survey-intro__body-container">
          <Text text={data.bodyText} />
          <div className="category-list__container fadeIn">
            {data ? (
              data.badge.map((elm) => {
                return <Badge badge={elm} key={elm.id} />;
              })
            ) : (
              <p>Try again</p>
            )}
          </div>
        </div>
        <div className="buttons fadeIn">
          <Link to={"/form"} className="button">
            <Button title="To questionnaire" color="dark-blue" />
          </Link>
          {!login[0].id ? (
            <Link to={"/sign-up"}>
              <Button title="Sign Up" color="dark-blue" className="button" />
            </Link>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormStart;
