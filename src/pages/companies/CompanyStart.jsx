import "./company.css";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";

import { Button } from "../../components/button/Button";

const CompanyStart = () => {
  return (
    <>
      <Navigation />
      <div className="temp-div">
        <h2>companies home</h2>

        <Link to={"/"}>
          <Button title="home" color="temp-button dark-pink" />
        </Link>
      </div>
    </>
  );
};

export default CompanyStart;
