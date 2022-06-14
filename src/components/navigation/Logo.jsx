import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="nav-logo-container">
      <Link to={"/"}>
        <img src={logo} className="nav-logo" alt="Kuli logo"></img>
      </Link>
    </div>
  );
};

export default Logo;
