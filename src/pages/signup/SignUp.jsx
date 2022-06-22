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
      <h2 className="load">Loading...</h2>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Navigation />
      <div className="sign-up-container">
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
            <Form className="sign-up-form-container">
              <h2 className="sign-up-form-title">Join The Kuli Community</h2>

              <section>
                <span className="warning">{warning}</span>
              </section>

              <section>
                <div className="sign-up-form-list">
                  <h3 className="sign-up-form-subtitle">
                    Your info:
                  </h3>
                  <div className="sign-up-name-input-container">
                    <div className="sign-up-name-input">
                      <label htmlFor="username">First Name:</label>
                      <Field
                        className="textField"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                      ></Field>
                    </div>

                    <div className="sign-up-name-input">
                      <label htmlFor="username">Last Name:</label>
                      <Field
                        className="textField"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                      ></Field>
                    </div>
                  </div>

                  <div className="sign-up-password-container">
                    <label htmlFor="username">
                      Email <span className="star">*</span>{" "}
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
                  </div>

                  <div className="sign-up-name-input-container">
                    <div className="sign-up-name-input">
                      <label htmlFor="username">
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
                    </div>

                    <div className="sign-up-name-input">
                      <label htmlFor="username">
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
                    </div>
                  </div>
                </div>
              </section>

              <hr className="sign-up-line"></hr>

              <div className="sign-up-more-details-container">
                <h3 className="sign-up-form-subtitle">Additional info:</h3>
                <div className="sign-up-more-details-items-container">
                  <div className="sign-up-more-details-item">
                    <label> Your Sector of Work</label>
                    <Field component="select" as="select" name="sector">
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
                  </div>

                  <div className="sign-up-more-details-item">
                    <label>Gender</label>
                    <Field component="select" as="select" name="gender">
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
                  </div>

                  <div className="sign-up-more-details-item">
                    <label> Employment status</label>
                    <div className="employed-container">
                      <div className="employed-container-item">
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

                      <div className="employed-container-item">
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
                    </div>
                  </div>
                </div>
              </div>

              <hr className="sign-up-line"></hr>

              <div className="sign-up-submit-container">
                <Button
                  kind="submit"
                  title="Sign Up"
                  color="dark-blue sign-up-submit-button"
                  disabled={isSubmitting}
                />
                <div className="login-link">
                  <a href="./login">Already a member of Kuli?</a>
                </div>
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
