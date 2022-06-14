import "./Congratulate.css";

import { Link } from "react-router-dom";

import { Button } from "../../components/button/Button";
import Navigation from "../../components/navigation/Navigation";

export const Congratulate = () => {
  return (
    <>
      <Navigation />

      <div className="wrap">
        <div>
          <h1 className="header">Thank You!</h1>
          <h3 className="subHead">Your feedback was submitted successfully</h3>
        </div>
        <div className="cta">
          <div className="boxed">
            <p className="par">
              Become an official member of the Kuli community (sign-up can be
              done anonymously)
            </p>
            <Link to="/sign-up">
              <Button color="dark-blue" title="Sign Up" />
            </Link>
          </div>
          <div className="boxed">
            <p className="par">
              Browse our growing library of companies and badges and find your
              next match
            </p>
            <Link to="/">
              <Button color="dark-pink" title="Explore Kuli" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
