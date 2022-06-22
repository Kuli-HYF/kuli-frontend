import "./Congratulate.css";

import { Link } from "react-router-dom";

import { Button } from "../../components/button/Button";
import Navigation from "../../components/navigation/Navigation";
import { useGlobalState } from "../../global";
import React from "react";

export const Congratulate = () => {
  const login = useGlobalState("userLoggedIn");
  // console.log(login[0], Boolean(login[0].id));
  return (
    <React.Fragment>
      <Navigation />
      <div className="congrats-wrap">
        <div>
          <h1 className="header">Thank You!</h1>
          <h3 className="sub-head">Your feedback was submitted successfully</h3>
        </div>
        <div className="cta">
          {!login[0].id ? (
            <div className="p-box">
              <h4 className="pr">
                Become an official member of the Kuli community (sign-up can be
                done anonymously)
              </h4>
              <Link to="/sign-up">
                <Button color="dark-blue" title="Sign Up" />
              </Link>
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
          <div className="p-box">
            <h4 className="pr">
              Browse our growing library of companies and badges and find your
              next match
            </h4>
            <Link to="/">
              <Button color="dark-pink" title="Explore Kuli" />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
