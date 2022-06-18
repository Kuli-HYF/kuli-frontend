import "./LogIn.css";

import { useState, useEffect } from "react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
// import { useNavigate } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";
import { get } from "../../api/get";

export const LogIn = () => {
  const [users, setUsers] = useState({});

  const fetchUsers = async () => {
    const promiseUsers = await get("kuli-users");
    const toUsers = [];
    toUsers.push(promiseUsers.data.map((user) => user));
    setUsers(toUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("users", users[0]);

  return !users ? (
    <React.Fragment>
      <Navigation />
      <div className="login">
        <h1>Loading...</h1>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Navigation />
      <div className="login">
        <h2>Login</h2>
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
            console.log("values", values);
          }}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form>
              <Field name="email" type="email" placeholder="Email"></Field>
              <ErrorMessage className="error" name="email"></ErrorMessage>
              <Field
                name="password"
                type="password"
                placeholder="Password"
              ></Field>
              <ErrorMessage className="error" name="password"></ErrorMessage>
              <pre>{JSON.stringify(values, null, 4)}</pre>
              <pre>{JSON.stringify(errors, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
