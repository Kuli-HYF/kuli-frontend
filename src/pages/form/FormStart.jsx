import "./FormStart.css";

import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Title } from "./title/Title.jsx";
import { Text } from "./text/Text.jsx";
import { Badge } from "./badge/Badge.jsx";
import { useState, useEffect } from "react";
import { get } from "../../api/get.js";

const FormStart = () => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    const result = await get("intropage?populate[badge][populate]=badgeImg");
    setData(result.data.attributes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data.badge);

  return (
    <div className="container">
      <div className="survey-intro__container fadeIn">
        <Title title={data.title} />
        <div className="survey-intro__body-container">
          <Text text={data.bodyText} />
          <div className="category-list__container fadeIn">
            {data ? data.badge.map((elm) => {
              return <Badge badge={elm} key={elm.id}/>
            }) : <p>Try again</p>}
          </div>
        </div>
        <div className="buttons fadeIn">
          <Link to={"/form"}>
            <Button title="To questionnaire" color="dark-blue" />
          </Link>
          <Link to={"/sign-up"}>
            <Button title="Sign Up" color="dark-blue" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormStart;
