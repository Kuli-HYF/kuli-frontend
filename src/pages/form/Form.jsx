import "./Form.css";

import { Formik, Form, Field } from "formik";
import { array, object, string } from "yup";
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
  const [companies, setCompanies] = useState([]);
  const [warning, setWarning] = useState("");
  const [companyId, setCompanyId] = useState(0);

  const toSubmit = useRef(false);
  const toSearch = useRef("");

  const fetchCompanies = async () => {
    const promiseBadge = await get("companies");
    setCompanies(promiseBadge.data);
  };

  const fetchBadges = async () => {
    const promiseBadge = await get("badges");
    const names = promiseBadge.data;
    setBadges(names.map((name) => name.attributes.name));
  };

  const fetchQuestions = async () => {
    const promiseQuest = await get("testform?populate[questions][populate]=*");
    setQuestions(promiseQuest.data.attributes.questions);
  };

  useEffect(() => {
    fetchCompanies();
    fetchBadges();
    fetchQuestions();
  }, []);

  const handleBack = () => {
    category > 0 ? setCategory(category - 1) : console.log(category);
  };

  const handleSearch = (event) => {
    setWarning("");
    setCompanyId(0);
    toSearch.current = event.target.parentElement.children[0].value;
    const names = [];
    companies.map((company) =>
      names.push([company.attributes.name, company.id])
    );
    console.log("name object", names);
    console.log("begin", toSearch.current, companyId, warning);

    names.map((name) =>
      name[0].toLowerCase() === toSearch.current.toLowerCase()
        ? setCompanyId(name[1])
        : setWarning("Company not found. Please check spelling and try again")
    );
    toSearch.current = "";
    console.log("end", toSearch.current, companyId, warning);
    event.target.parentElement.children[0].value = "";
  };

  return companies.data && badges.data && questions.data ? (
    <h1 className="header" key="743">
      Loading...
    </h1>
  ) : companyId === 0 ? (
    <div key="54" className="company">
      <h2 className="searchHead">
        Which company would you like to award a Kuli badge?
      </h2>
      <span className="warning">{warning}</span>
      <div className="search">
        <input
          className="input"
          type="input"
          placeholder="Company Name"
        ></input>
        <Button
          kind="button"
          title="Search"
          color="dark-pink"
          action={handleSearch}
        />
      </div>
      <Link to={"/questionnaire"}>
        <Button
          title="Go Back"
          kind="button"
          color="pink-outline"
          action={() => {
            setWarning("");
          }}
        />
      </Link>
    </div>
  ) : (
    <Formik
      validationSchema={object({
        checked: array(string()),
      })}
      initialValues={{
        checked: [],
      }}
      onSubmit={(values) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            setAnswers(values.checked);
            if (toSubmit.current === true) {
              badgeCalc(answers, companyId);
              toSubmit.current = false;
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
            <Link to={"/form"}>
              <Button
                title="Return"
                kind="button"
                color="dark-pink"
                action={() => setCompanyId(0)}
              />
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
                setCategory(category + 1);
              }}
            />
          ) : (
            <Button
              title="Next"
              kind="button"
              color="dark-blue"
              action={() => {
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
