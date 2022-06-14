import "./Form.css";

import { Formik, Form, Field } from "formik";
import { array, object, string, yup } from "yup";
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

  const toSubmit = useRef(false);

  const fetchBadges = async () => {
    const promiseBadge = await get("badges");
    const names = promiseBadge.data;
    // console.log("get badge", names);
    setBadges(names.map((name) => name.attributes.name)); // 1employ 2work 3health 4 govern
  };

  /*
  const fetchBadges = async () => {
    const promiseBadge = await get(
      "intropage?populate[badge][populate]=badge-name"
    );
    const names = promiseBadge.data.attributes.badge;
    setBadges(names.map((name) => name.badgeName)); // 1employ 2work 3health 4 govern
  };
*/
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
      validationSchema={object({
        checked: array(string()),
      })}
      initialValues={{
        checked: [],
      }}
      onSubmit={(values) => {
        // console.log("now", values);
        return new Promise((resolve) => {
          setTimeout(() => {
            // if (category === badges.length) {
            setAnswers(values.checked);
            if (toSubmit.current === true) {
              badgeCalc(answers);
              // console.log("ping", toSubmit.current);
              toSubmit.current = false;
              // console.log("pong", toSubmit.current);
              navigate("/confirm");
            }
            resolve();
          }, 500);
        });
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
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
                          {...(touched.checked && errors.checked
                            ? errors.checked
                            : null)}
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
              disabled={isSubmitting}
              action={() => (toSubmit.current = true)}
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
          {/* <pre>{JSON.stringify(errors, null, 4)}</pre> */}
        </Form>
      )}
    </Formik>
  );
};
