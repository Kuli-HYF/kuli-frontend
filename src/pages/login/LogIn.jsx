import "./LogIn.css";

import logo from "../../assets/logo.png";

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
      <div className="login">
        <h1>Loading...</h1>
      </div>
    </React.Fragment>
  ) : login[0].id ? (
    <React.Fragment>
      <Navigation />
      <div className="login">
        <div className="congrats">
          {login[0].attributes.firstName ? (
            <h2>Welcome Back {login[0].attributes.firstName}!</h2>
          ) : (
            <h2>Welcome Back {login[0].attributes.email}!</h2>
          )}
        </div>
        <div className="btn">
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
      <div className="login">
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
            <Form className="loginForm">
              <img src={logo} className="logo" alt="Kuli logo"></img>
              <div className="welcome">
                <h1>Welcome to Kuli!</h1>
                <p>Log in to your Account</p>
              </div>

              <div className="">
                <section>
                  <ul>
                    <li>
                      <label for="email">
                        Email <span class="star">*</span>{" "}
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="John@yahoo.com"
                        className="field"
                      ></Field>
                      <ErrorMessage
                        component="div"
                        className="error"
                        name="email"
                      ></ErrorMessage>
                    </li>
                    <li>
                      <label for="username">
                        Password <span class="star">*</span>{" "}
                      </label>
                      <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="field"
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
              <div className="btn">
                <Button kind="submit" color="dark-blue" title="Login"></Button>
              </div>
              {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
              {/* <pre>{JSON.stringify(errors, null, 4)}</pre> */}
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
