// import KuliLogoLight from "../../assets/kuli-logo-light.svg"
import "./footer.css";
import { Link } from "react-router-dom";
import { ReactComponent as GitHubIcon } from "../../assets/github-logo.svg";

const FooterHome = () => {
  return (
    <div className="footer-home-container">
      <div className="footer-home-content-container">
        <div className="footer-home-text-container">
          <p className="footer-home-text">
            © 2022 - Kuli - All rights reserved{" "}
          </p>
        </div>
        <div className="footer-logo-container">
          <Link to="//github.com/Kuli-HYF" target="_blank">
            {/* <img className="kuli-logo-light" src={KuliLogoLight} alt="Kuli logo"></img> */}
            <GitHubIcon className="github-icon" fill="#ee826c" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
