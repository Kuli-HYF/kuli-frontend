// import KuliLogoLight from "../../assets/kuli-logo-light.svg"
import { ReactComponent as GitHubIcon } from "../../assets/github-logo.svg";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="footer-text-container">
          <p className="footer-text">© 2022 - Kuli - All rights reserved </p>
        </div>
        <div className="footer-logo-container">
          <Link to="//github.com/Kuli-HYF" target="_blank">
            {/* <img className="kuli-logo-light" src={KuliLogoLight} alt="Kuli logo"></img> */}
            <GitHubIcon className="github-icon" fill="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
