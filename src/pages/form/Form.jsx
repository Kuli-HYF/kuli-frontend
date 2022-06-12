import { useFormik, Formik, Form, Field } from "formik";
import { Yup } from "yup";
import { Button } from "../../components/button/Button";
import React, { useState, useEffect, useRef } from "react";
import { get } from "../../api/get";
import { useNavigate, Link } from "react-router-dom";

import "./Form.css";
// import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import { badgeCalc } from "../../logic/badgeCalc";

export const Former = () => {
  let navigate = useNavigate();

  const [badges, setBadges] = useState([]);
  const [questions, setQuestions] = useState([]);
  // const [category, setCategory] = useState(0);
  const [answers, setAnswers] = useState([]);
  // const category = useRef(0);
  const [category, setCategory] = useState(0);

  // const answers = useRef({});

  const fetchBadges = async () => {
    const promiseBadge = await get(
      "intropage?populate[badge][populate]=badge-name"
    );
    const names = promiseBadge.data.attributes.badge;
    setBadges(names.map((name) => name.badgeName)); // badge names)
  };

  const fetchQuestions = async () => {
    const promiseQuest = await get("testform?populate[questions][populate]=*");
    const prompts = promiseQuest.data.attributes.questions;
    setQuestions(promiseQuest.data.attributes.questions);
    // setQuestions(
    //   prompts.map((name) => [name.prompt, name.badge, name.selections])
    // ); //[question, badge, {answers}]);
  };

  useEffect(() => {
    fetchBadges();
    fetchQuestions();
  }, []);

  const handleBack = () => {
    category > 0 ? setCategory(category - 1) : console.log(category);
  };

  // console.log("form", questions);

  return badges.data && questions.data ? (
    <h1 key="743">Loading...</h1>
  ) : (
    <Formik
      initialValues={{
        checked: [],
      }}
      onSubmit={(values) => console.log("submit:", values)}
    >
      {({ values }) => (
        <Form>
          <div className="questionnaire">
            <h1 key="20">{badges[category]}</h1>
            {!badges && !questions ? (
              <h1 key="30">Load</h1>
            ) : (
              questions.map((question) =>
                question.badge !== badges[category] ? (
                  <React.Fragment key={question.id} />
                ) : (
                  <div key={question.id}>
                    <p>{question.prompt}</p>
                    {question.selections.map((answer) => (
                      <label key={answer.id}>
                        <Field
                          type="checkbox"
                          name="checked"
                          value={answer.score}
                        />
                        {answer.answer}
                      </label>
                    ))}
                  </div>
                )
              )
            )}
          </div>
          {category === 0 ? (
            <Link to={"/badges"}>
              <Button title="Return" kind="button" color="dark-pink" />
            </Link>
          ) : (
            <Button
              color="dark-pink"
              title="Back"
              kind="button"
              action={() => handleBack()}
            />
          )}
          {category === badges.length - 1 ? (
            // <Link to={"/confirm"}>
            <Button
              title="Next"
              kind="submit"
              color="dark-blue"
              action={() => {
                navigate("/confirm");
                badgeCalc(answers);
              }}
            />
          ) : (
            // </Link>
            <Button
              color="dark-blue"
              title="Next"
              kind="submit"
              action={() => setCategory(category + 1)}
            />
          )}
        </Form>
      )}
    </Formik>
  );
};

/**
 import { useNavigate } from "react-router-dom";

function SignupForm() {
  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    await submitForm(event.target);
    navigate("../success", { replace: true });
  }

  return <form onSubmit={handleSubmit}>{/* ... */
/*}</form>;
}
 */
/*
export const Former = () => {
  const formik = useFormik({
    initialValues: {
      checked: {},
    },
    onSubmit: (values) => console.log(values),
  });
  // console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="questions">
        <label>
          <input
            type="checkbox"
            onChange={formik.handleChange}
            value="one"
            name="checked"
          />
          one
        </label>
        <label>
          <input
            type="checkbox"
            onChange={formik.handleChange}
            value="two"
            name="checked"
          />
          two
        </label>
        <label>
          <input
            type="checkbox"
            onChange={formik.handleChange}
            value="three"
            name="checked"
          />
          three
        </label>
      </div>
      <Button kind="submit" title="Submit" />{" "}
    </form>
  );
};
*/
