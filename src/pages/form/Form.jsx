import { useFormik, Formik, Form, Field } from "formik";
import { Yup } from "yup";
import { Button } from "../../components/button/Button";
import { useState, useEffect, useRef } from "react";
import { get } from "../../api/get";
import { Link } from "react-router-dom";

import "./Form.css";
// import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import { badgeCalc } from "../../logic/badgeCalc";

export const Former = () => {
  const [badges, setBadges] = useState([]);
  const [questions, setQuestions] = useState([]);
  // const [category, setCategory] = useState(0);
  // const [answers, setAnswers] = useState({});
  // const category = useRef(0);
  const [category, setCategory] = useState(0);
  let answers = {};

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
    setQuestions(
      prompts.map((name) => [name.prompt, name.badge, name.selections])
    ); //[question, badge, {answers}]);
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
      onSubmit={(values) => badgeCalc(values.checked)}
    >
      {({ values }) => (
        <Form key="90">
          <div className="questionnaire">
            <h1 key="20">{badges[category]}</h1>
            {!badges && !questions ? (
              <h1 key="30">Load</h1>
            ) : (
              questions.map((tit, i) =>
                tit[1] !== badges[category] ? (
                  <></>
                ) : (
                  <div key={i + 19}>
                    <p key={i + 867}>{tit[0]}</p>
                    {tit[2].map((ans, i) => (
                      <label key={i + 32}>
                        <Field
                          key={ans.score}
                          type="checkbox"
                          name="checked"
                          value={ans.score}
                        />
                        {ans.answer}
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
              key={10}
              color="dark-pink"
              title="Back"
              kind="button"
              action={() => handleBack()}
            />
          )}
          {category === badges.length - 1 ? (
            <Link to={"/congrats"}>
              <Button title="Submit" kind="button" color="dark-blue" />
            </Link>
          ) : (
            <Button
              key={12}
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
