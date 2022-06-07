import './company.css'
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";

import { Button } from "../../components/button/Button";

const CompanyStart = () => {
  return (
    <>
      <Navigation />
      <div className="companies-div">companies home</div>

      <Link to={"/"}>
        <Button title="go home" />
      </Link>
    </>
  );
};

export default CompanyStart;
