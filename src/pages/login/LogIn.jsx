import "./LogIn.css";

// import logo from "../../assets/logo.png";

import { useState, useEffect } from "react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { Link } from "react-router-dom";

import { useGlobalState, setGlobalState } from "../../global";
import Navigation from "../../components/navigation/Navigation";
import { get } from "../../api/get";
import { Button } from "../../components/button/Button";

export const LogIn = () => {
  const login = useGlobalState("userLoggedIn");

  const [users, setUsers] = useState({});
  const [warning, setWarning] = useState("");

  const fetchUsers = async () => {
    const promiseUsers = await get("kuli-users");
    const toUsers = [];
    toUsers.push(promiseUsers.data.map((user) => user));
    setUsers(toUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleLogOut = () => {
    setGlobalState("userLoggedIn", {});
    setWarning("");
  };

  return !users ? (
    <React.Fragment>
      <Navigation />
      <div className="login-container">
        <h2>Loading...</h2>
      </div>
    </React.Fragment>
  ) : login[0].id ? (
    <React.Fragment>
      <Navigation />
      <div className="login-container">
        <div className="congrats">
          {login[0].attributes.firstName ? (
            <h2>Welcome Back {login[0].attributes.firstName}!</h2>
          ) : (
            <h2>Welcome Back {login[0].attributes.email}!</h2>
          )}
        </div>
        <div className="login-button-container">
          <Link to="/">
            <Button
              kind="button"
              color="dark-blue"
              title="Continue to Kuli"
            ></Button>
          </Link>
          <Button
            kind="button"
            color="pink-outline"
            action={handleLogOut}
            title="Logout"
          ></Button>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Navigation />
      <div className="login-container">
        <header></header>

        <span className="warning">{warning}</span>
        <Formik
          validationSchema={object({
            email: string().required("Required Field"),
            password: string().required("Required Field"),
          })}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values, onSubmitProps) => {
            const loginUser = [];
            users[0].map((user) =>
              user.attributes.email !== values.email
                ? setWarning("No Such User")
                : user.attributes.email === values.email &&
                  user.attributes.password !== values.password
                ? loginUser.push(user.attributes.email)
                : loginUser.push(user)
            );
            loginUser.length === 0
              ? setWarning("No Such User")
              : loginUser[0].attributes
              ? setGlobalState("userLoggedIn", loginUser[0])
              : setWarning("Incorrect Password");
            onSubmitProps.resetForm();
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form className="loginForm-container">
              {/* <img src={logo} className="logo" alt="Kuli logo"></img> */}
              <div className="login-title-container">
                <h1 className="login-title">Welcome to Kuli!</h1>
                <p className="login-subtitle">Log in to your Account</p>
              </div>

              <div className="login-input-container">
                <section>
                  <ul className="login-fields-container">
                    <li>
                      <label htmlFor="email">
                        Email <span className="star">*</span>{" "}
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Jean@yahoo.com"
                        className="login-field"
                      ></Field>
                      <ErrorMessage
                        component="div"
                        className="error"
                        name="email"
                      ></ErrorMessage>
                    </li>
                    <li>
                      <label htmlFor="username">
                        Password <span className="star">*</span>{" "}
                      </label>
                      <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="login-field"
                      ></Field>
                      <ErrorMessage
                        component="div"
                        className="error"
                        name="password"
                      ></ErrorMessage>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="login-button-container">
                <Button
                  kind="submit"
                  color="dark-blue login-submit-button"
                  title="Login"
                ></Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
