import "./LogIn.css";

import { useState, useEffect } from "react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
// import { useNavigate } from "react-router-dom";

import { useGlobalState, setGlobalState } from "../../global";
import Navigation from "../../components/navigation/Navigation";
import { get } from "../../api/get";
import { Button } from "../../components/button/Button";
import { useRef } from "react";

export const LogIn = () => {
  const login = useGlobalState("userLoggedIn");

  const [users, setUsers] = useState({});
  // const [warning, setWarning] = useState("")

  const warning = useRef("");

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
  };

  // console.log("users", users[0]);

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
        <h2>Logout</h2>
      </div>
      <div className="btn">
        <Button
          kind="button"
          color="dark-pink"
          action={handleLogOut}
          title="Logout"
        ></Button>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Navigation />
      <div className="login">
        <h2>Login</h2>
        <span className="warning">{warning.current}</span>
        <Formik
          validationSchema={object({
            email: string().required("Required Field"),
            password: string().required("Required Field"),
          })}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            users[0].map((user) => {
              if (
                user.attributes.email === values.email &&
                user.attributes.password === values.password
              ) {
                setGlobalState("userLoggedIn", user);
                warning.current = "";
                console.log("success", login[0]);
                return user;
              } else if (
                user.attributes.email === values.email &&
                user.attributes.password !== values.password
              ) {
                warning.current = "Incorrect Password";
                console.log(
                  "Incorrect Password",
                  values.password,
                  user.attributes.password
                );
              } else {
                warning.current = "No such user";
                console.log(
                  "User not Found",
                  user.attributes.email,
                  values.email
                );
              }
            });
            console.log("values", values, login[0]);
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form>
              <div className="field">
                <div>
                  <Field name="email" type="email" placeholder="Email"></Field>
                  <ErrorMessage className="error" name="email"></ErrorMessage>
                </div>
                <div>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                  ></Field>
                  <ErrorMessage
                    className="error"
                    name="password"
                  ></ErrorMessage>
                </div>
              </div>
              <div className="btn">
                <Button kind="submit" color="dark-blue" title="Login"></Button>
              </div>
              <pre>{JSON.stringify(values, null, 4)}</pre>
              <pre>{JSON.stringify(errors, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
