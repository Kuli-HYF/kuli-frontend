import React, { useState, useEffect } from "react";
import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import { ref, object, string, boolean } from "yup";
import { useNavigate } from "react-router-dom";
import { setGlobalState, useGlobalState } from "../../global";

import "./SignUp.css";

import { get } from "../../api/get.js";
import { post } from "../../api/post.js";

import { Button } from "../../components/button/Button";
import Navigation from "../../components/navigation/Navigation";

export const SignUp = () => {
  const login = useGlobalState("userLoggedIn");
  console.log("sign", login[0]);
  let navigate = useNavigate();

  const [users, setUsers] = useState({});
  const [warning, setWarning] = useState("");

  // const warn = useRef("")

  const fetchUsers = async () => {
    const promiseUsers = await get("kuli-users");
    const toUsers = [];
    toUsers.push(promiseUsers.data.map((user) => user));
    setUsers(toUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // console.log("users", users);
  // console.log("input", formik.values.sector);

  return !users ? (
    <React.Fragment>
      <Navigation />
      <h1 className="load">Loading...</h1>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Navigation />
      <div className="signup">
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
          onSubmit={(values) => {
            const mailCheck = values.email;
            const emails = [];
            let toPost = {
              data: {
                email: values.email,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
                isWorking: values.isWorking,
              },
            };
            values.sector !== ""
              ? (toPost.sector = values.sector)
              : values.gender !== ""
              ? (toPost.gender = values.gender)
              : values.sector !== "" && values.gender !== ""
              ? (toPost = {
                  data: {
                    email: values.email,
                    password: values.password,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    isWorking: values.isWorking,
                    gender: values.gender,
                    sector: values.sector,
                  },
                })
              : (toPost = {
                  data: {
                    email: values.email,
                    password: values.password,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    isWorking: values.isWorking,
                  },
                });
            users[0].map((user) => emails.push(user.attributes.email));
            if (emails.includes(mailCheck)) {
              setWarning("Email is already in use");
            } else {
              return new Promise((resolve) => {
                setWarning("");
                post("kuli-users", toPost);
                values = {
                  email: "",
                  password: "",
                  passwordConfirmation: "",
                  firstName: "",
                  lastName: "",
                  sector: "",
                  gender: "",
                  isWorking: false,
                };
                navigate("/login");
                // console.log("values", toPost);
                resolve();
              }, 500);
            }

            // emails.includes(mailCheck) ? setWarning("in") : setWarning("out");

            /*
          return new Promise((resolve) => {
            setWarning("");
            console.log("values", values);
            resolve();
          }, 500);
          */
          }}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form>
              <div className="envelope">
                <h2>Sign Up to Kuli</h2>
                <h3>Mandatory Fields</h3>
                <span className="warning">{warning}</span>
                <div className="input">
                  <Field name="email" type="email" placeholder="Email"></Field>
                  <ErrorMessage className="error" name="email"></ErrorMessage>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                  ></Field>
                  <ErrorMessage
                    className="error"
                    name="password"
                  ></ErrorMessage>
                  <Field
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Confirm Password"
                    // onChange={formik.handleChange}
                    // value={formik.values.passwordConfirmation}
                  ></Field>
                  <ErrorMessage
                    className="error"
                    name="passwordConfirmation"
                  ></ErrorMessage>
                </div>
                <h3>Optional Fields</h3>
                <div className="input">
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    // onChange={formik.handleChange}
                    // value={formik.values.firstName}
                  ></Field>
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    // onChange={formik.handleChange}
                    // value={formik.values.lastName}
                  ></Field>
                  <Field
                    as="select"
                    name="sector"
                    // type="sector"
                    // placeholder="Select Sector"
                    // onChange={formik.handleChange}
                    // value={formik.values.sector}
                  >
                    <option className="option" name="sector" value="">
                      Select Sector
                    </option>
                    <option name="sector" value="creative">
                      Creative
                    </option>
                    <option name="sector" value="education">
                      Education
                    </option>
                    <option name="sector" value="finance">
                      Finance
                    </option>
                    <option name="sector" value="service">
                      Service
                    </option>
                    <option name="sector" value="tech">
                      Tech
                    </option>
                  </Field>
                  <Field
                    as="select"
                    name="gender"
                    // type="sector"
                    // placeholder="Select Sector"
                    // onChange={formik.handleChange}
                    // value={formik.values.sector}
                  >
                    <option className="option" name="sector" value="">
                      Gender
                    </option>
                    <option name="sector" value="female">
                      Female
                    </option>
                    <option name="sector" value="male">
                      Male
                    </option>
                    <option name="sector" value="other">
                      Other
                    </option>
                  </Field>
                  <p>Unemployed</p>
                  <Field name="isWorking" value="false" type="radio"></Field>
                  <p>Employed</p>

                  <Field name="isWorking" value="true" type="radio"></Field>
                  <Button
                    kind="submit"
                    title="Sign Up"
                    color="dark-blue"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
              {/* <pre>{JSON.stringify(errors, null, 4)}</pre> */}
            </Form>
          )}
        </Formik>
        <div className="login-link">
          <a href="./login">Already a member of Kuli?</a>
        </div>
      </div>
    </React.Fragment>
  );
};
