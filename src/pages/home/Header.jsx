import "./home.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import { Button } from "../../components/button/Button";

const Header = () => {
  return (
    <div className="header-content">
      <div className="header-logo-container">
        <img src={logo} className="logo" alt="logo"></img>
      </div>
      <div className="header-title-container">
        <h1 className="header-title">
          Kuli is a place for finding opportunities and sharing insights about
          local companies committed to gender equality.
        </h1>
      </div>
      <div className="header-paragraph-container">
        <p className="header-paragraph">
          Our mission is to support diverse talent and provide opportunities to
          expand their network, and help local companies build diverse teams
          where everyone can feel engaged and included.
        </p>
      </div>

      <div className="header-buttons-container">
        <Link to={"/badges"}>
          <Button title="to form" color="home-button dark-pink" />
        </Link>
        <Link to={"/companies"}>
          <Button title="to company list" color="home-button dark-pink" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
