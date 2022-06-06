import "./home.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import { Button } from "../../components/button/Button";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} className="logo" alt="logo"></img>
      <h1>
        Kuli is a place for finding opportunities and sharing insights about
        local companies committed to gender equality.
      </h1>
      <div className="header-buttons-container">
        <Link to={"/badges"}>
          <Button title="to form" />
        </Link>
        <Link to={"/companies"}>
          <Button title="to company list" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
