import "./Congratulate.css";

import { Link } from "react-router-dom";

import { Button } from "../../components/button/Button";
import Navigation from "../../components/navigation/Navigation";
import { useGlobalState, setGlobalState } from "../../global";
import React from "react";

export const Congratulate = () => {
  const login = useGlobalState("userLoggedIn");
  // console.log(login[0], Boolean(login[0].id));
  return (
    <>
      <Navigation />

      <div className="wrap">
        <div>
          <h1 className="header">Thank You!</h1>
          <h3 className="subHead">Your feedback was submitted successfully</h3>
        </div>
        <div className="cta">
          {!login[0].id ? (
            <div className="boxed">
              <p className="par">
                Become an official member of the Kuli community (sign-up can be
                done anonymously)
              </p>
              <Link to="/sign-up">
                <Button color="dark-blue" title="Sign Up" />
              </Link>
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
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
