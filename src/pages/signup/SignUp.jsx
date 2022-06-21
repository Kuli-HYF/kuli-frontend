import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ref, object, string, boolean } from "yup";
import { useNavigate } from "react-router-dom";

import "./SignUp.css";

import { get } from "../../api/get.js";
import { post } from "../../api/post.js";

import { Button } from "../../components/button/Button";
import Navigation from "../../components/navigation/Navigation";

export const SignUp = () => {
  let navigate = useNavigate();

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

  return !users ? (
    <React.Fragment>
      <Navigation />
      <h1 className="load">Loading...</h1>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Navigation />
      <div className="sign-up">
        <Formik
          className="formik-body"
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
          onSubmit={(values, onSubmitProps) => {
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
                navigate("/login"); // need congrats page
                resolve();
              }, 500);
            }
            onSubmitProps.resetForm();
          }}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form className="form">
              <h1 className="head-up">Join The Kuli Community</h1>
              <section>
                <span className="warning">{warning}</span>
              </section>
              <section>
                <ul>
                  <h2>Your personal details</h2>
                  <li>
                    <label>First Name:</label>
                    <Field
                      className="textField"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                    ></Field>
                  </li>
                  <li>
                    <label>Last Name:</label>
                    <Field
                      className="textField"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                    ></Field>
                  </li>
                  <li>
                    <label>
                      Email <span className="star">*</span>
                    </label>
                    <Field
                      className="textField"
                      name="email"
                      type="email"
                      placeholder="Jean@yahoo.com"
                    ></Field>
                    <ErrorMessage
                      component="div"
                      className="error"
                      name="email"
                    ></ErrorMessage>
                  </li>
                  <li>
                    <label>
                      Password <span className="star">*</span>
                    </label>
                    <Field
                      className="textField"
                      name="password"
                      type="password"
                      placeholder="Password"
                    ></Field>
                    <ErrorMessage
                      component="div"
                      className="error"
                      name="password"
                    ></ErrorMessage>
                  </li>
                  <li>
                    <label>
                      Confirm Password <span className="star">*</span>
                    </label>
                    <Field
                      className="textField"
                      name="passwordConfirmation"
                      type="password"
                      placeholder="Confirm Password"
                    ></Field>
                    <ErrorMessage
                      component="div"
                      className="error"
                      name="passwordConfirmation"
                    ></ErrorMessage>
                  </li>
                </ul>
              </section>
              <section>
                <ul>
                  <h2>More details</h2>
                  <li>
                    <label> Your Sector of Work</label>
                    <Field component="select" as="select" name="sector">
                      <option name="sector" value="">
                        Sector
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
                  </li>
                  <li>
                    <label>Gender</label>
                    <Field component="select" as="select" name="gender">
                      <option name="sector" value="">
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
                  </li>

                  <li>
                    <div className="check-section">
                      <label className="check-up">
                        <Field
                          component="input"
                          name="isWorking"
                          value="false"
                          type="radio"
                        ></Field>
                        <span className="circle"></span>
                      </label>
                      <p className="p-up">Unemployed</p>
                    </div>
                  </li>

                  <li>
                    <div className="check-section">
                      <label className="check-up">
                        <Field
                          component="input"
                          name="isWorking"
                          value="true"
                          type="radio"
                        ></Field>
                        <span className="circle"></span>
                      </label>
                      <p className="p-up">Employed</p>
                    </div>
                  </li>
                </ul>
              </section>
              <section>
                <Button
                  kind="submit"
                  title="Sign Up"
                  color="dark-blue-up"
                  disabled={isSubmitting}
                />
              </section>
              <section>
                <div className="login-link">
                  <a href="./login">Already a member of Kuli?</a>
                </div>
              </section>
              {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
              {/* <pre>{JSON.stringify(errors, null, 4)}</pre> */}
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
