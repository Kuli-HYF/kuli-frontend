import "./LogIn.css";

import { useState, useEffect } from "react";
import React from "react";
import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import { ref, object, string, boolean } from "yup";
import { useNavigate } from "react-router-dom";

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

  console.log("users", users);

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
      </div>
    </React.Fragment>
  );
};
/*
<Formik
          validationSchema={object({
            email: string().required("Required Field"),
            password: string()
              .required("Required Field")
              .min(4, "Password is must be longer than four digits")
              .max(20, "Password is must be shorter than twenty digits"),
            passwordConfirmation: string()
              .oneOf([ref("password"), null], "Passwords must match")
              .required("Required Field"),
            isWorking: boolean().oneOf([false, true]),
          })}
          initialValues={{
            email: "",
            password: "",
            passwordConfirmation: "",
            firstName: "",
            lastName: "",
            sector: "",
            gender: "",
            isWorking: false,
          }}
          onSubmit={(values) => 
*/
