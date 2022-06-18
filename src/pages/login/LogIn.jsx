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

  return (
    <React.Fragment>
      <Navigation />
      <div className="login">
        <h2>Login</h2>
      </div>
    </React.Fragment>
  );
};
