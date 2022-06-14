import "./Form.css";

import { useFormik, Formik, Form, Field } from "formik";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Button } from "../../components/button/Button";
import { get } from "../../api/get";

import { badgeCalc } from "../../logic/badgeCalc";

export const Former = () => {
  let navigate = useNavigate();

  const [badges, setBadges] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [category, setCategory] = useState(0);

  const fetchBadges = async () => {
    const promiseBadge = await get(
      "intropage?populate[badge][populate]=badge-name"
    );
    const names = promiseBadge.data.attributes.badge;
    setBadges(names.map((name) => name.badgeName)); // badge names)
  };

  const fetchQuestions = async () => {
    const promiseQuest = await get("testform?populate[questions][populate]=*");
    setQuestions(promiseQuest.data.attributes.questions);
  };

  useEffect(() => {
    fetchBadges();
    fetchQuestions();
  }, []);

  const handleBack = () => {
    category > 0 ? setCategory(category - 1) : console.log(category);
  };
  // console.log("form", badges);

  return badges.data && questions.data ? (
    <h1 className="header" key="743">
      Loading...
    </h1>
  ) : (
    <Formik
      initialValues={{
        checked: [],
      }}
      onSubmit={(values) => {
        if (category === badges.length) {
          // console.log("now", values);
          setAnswers(values.checked);
          badgeCalc(answers);
        }
      }}
    >
      {({ values }) => (
        <Form>
          <div className="questionnaire">
            {category === badges.length || (!badges && !questions) ? (
              <h1>Please confirm your choices</h1>
            ) : (
              <React.Fragment key="93" />
            )}
            <h1 className="header" key="20">
              {badges[category]}
            </h1>
            {!badges && !questions ? (
              <h1 key="30">Loading...</h1>
            ) : category === badges.length ? (
              questions.map((quest) =>
                quest.selections.map((sel) =>
                  answers.includes(sel.score) ? (
                    <div key={sel.id}>
                      <h3>{quest.prompt}</h3>
                      <p className="confirm">{sel.answer}</p>
                    </div>
                  ) : (
                    <React.Fragment key={sel.id} />
                  )
                )
              )
            ) : (
              questions.map((question) =>
                question.badge !== badges[category] ? (
                  <React.Fragment key={question.id} />
                ) : (
                  <div key={question.id}>
                    <p className="question">{question.prompt}</p>
                    {question.selections.map((answer) => (
                      <label className="batch" key={answer.id}>
                        <Field
                          // className="box"
                          type="checkbox"
                          name="checked"
                          value={answer.score}
                        />
                        <p className="answer">{answer.answer}</p>
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
          {category === badges.length ? (
            <Button
              title="Submit"
              kind="submit"
              color="dark-blue"
              action={() => setTimeout(navigate, 1000, "/confirm")}
            />
          ) : category === badges.length - 1 ? (
            <Button
              title="Confirm"
              kind="button"
              color="dark-blue"
              action={() => {
                // console.log("cat", category);
                setCategory(category + 1);
              }}
            />
          ) : (
            <Button
              title="Next"
              kind="button"
              color="dark-blue"
              action={() => {
                // console.log("cat", category);
                setCategory(category + 1);
              }}
            />
          )}
        </Form>
      )}
    </Formik>
  );
};
