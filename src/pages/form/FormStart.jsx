import "./FormStart.css";

import { Link } from "react-router-dom";

import { Button } from "../../components/button/Button";
import Navigation from "../../components/navigation/Navigation";

const FormStart = () => {
  return (
    <>
      <Navigation />
      <div className="temp-div">
        <h2>questionnaire home</h2>

        <Link to={"/"}>
          <Button title="home" color="temp-button dark-pink" />
        </Link>
      </div>
    </>
  );
};

export default FormStart;
