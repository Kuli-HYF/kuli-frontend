import "./home.css";

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
      <Button title="click"/>
    </div>
  );
};

export default Header;
