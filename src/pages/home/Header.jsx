import "./home.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import { Button } from "../../components/button/Button";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <img src={logo} className="logo" alt="logo"></img>
        <h1>
          Kuli is a place for finding opportunities and sharing insights about
          local companies committed to gender equality.
        </h1>

        <p>
          Our mission is to support diverse talent and provide opportunities to
          expand their network, and help local companies build diverse teams
          where everyone can feel engaged and included.
        </p>

        <div className="header-buttons-container">
          <Link to={"/badges"}>
            <Button title="to form" color="dark-pink"/>
          </Link>
          <Link to={"/companies"}>
            <Button title="to company list" color="dark-pink"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
