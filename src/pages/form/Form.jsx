import "./Form.css";

import { Formik, Form, Field } from "formik";
import { array, object, string } from "yup";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Button } from "../../components/button/Button";
import { get } from "../../api/get";
import Navigation from "../../components/navigation/Navigation";

import { badgeCalc } from "../../logic/badgeCalc";

export const Former = () => {
  let navigate = useNavigate();

  const [badges, setBadges] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [category, setCategory] = useState(0);
  const [companies, setCompanies] = useState([]);
  // const [warning, setWarning] = useState("");
  const [companyId, setCompanyId] = useState(0);
  const [companySearch, setCompanySearch] = useState("");
  // const [badgeIds, setBadgeIds] = useState([]);

  const toSubmit = useRef(false);
  const toSearch = useRef("");
  const badgeId = useRef([]);
  const warning = useRef("");

  const fetchCompanies = async () => {
    const promiseCompany = await get("companies?populate=badges");
    // console.log("fetch badges", promiseCompany.data);
    setCompanies(promiseCompany.data);
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
    warning.current = "";
    setCompanyId(0);
    toSearch.current = event.target.parentElement.children[0].value;
    const names = [];
    companies.map((company) =>
      names.push([company.attributes.name, company.id])
    );
    // console.log("names", names[0], names[1], names[4]);
    names.map((name) => {
      if (name[0].toLowerCase() === toSearch.current.toLowerCase()) {
        // setTimeout(setCompanyId, 400, name[1]);
        setCompanyId(name[1]);
        warning.current = "";
        return warning;
      } else {
        return (warning.current =
          "Company not found. Please check spelling and try again");
      }
    });
    // console.log("test", companyId);

    toSearch.current = "";
    // console.log("end", toSearch.current, companyId, warning);
    setCompanySearch("");
  };

  const handleReturn = (event) => {
    setTimeout(navigate, 400, "/questionnaire");
    warning.current = "";
  };

  const badgesArray = [];
  if (companyId !== 0) {
    companies.map((com) => {
      if (com.id === companyId) {
        badgesArray.push(com.attributes.badges.data);
        // console.log("adding", badgesArray);
      }
      return (warning.current = "");
    });

    badgesArray[0].length !== 0
      ? (badgeId.current = badgesArray[0].map((one) => one.id))
      : console.log("NO badges", badgeId.current);
    // console.log("set badges", badgeId.current, badgesArray);
  }

  // console.log("before", badgeId.current, companyId);
  return companies.data && badges.data && questions.data ? (
    <React.Fragment>
      <Navigation />
      <h1 className="header" key="743">
        Loading...
      </h1>
    </React.Fragment>
  ) : companyId === 0 ? (
    <React.Fragment>
      <Navigation></Navigation>
      <div key="54" className="company">
        <h2 className="searchHead">
          Which company would you like to award a Kuli badge?
        </h2>
        <span className="warning">{warning.current}</span>
        <div className="search">
          <input
            className="input"
            type="input"
            placeholder="Company Name"
            value={companySearch}
            onChange={(e) => {
              setCompanySearch(e.target.value);
            }}
          ></input>
          <Button
            kind="button"
            title="Search"
            color="dark-pink"
            action={handleSearch}
          />
        </div>
        <div className="search-field">
          <ul>
            {companies.map((company) =>
              companySearch.length === 0 ? (
                <React.Fragment key={company.id}></React.Fragment>
              ) : company.attributes.name
                  .toLowerCase()
                  .includes(companySearch.toLowerCase()) ? (
                <li
                  key={company.id}
                  onClick={() => setCompanySearch(company.attributes.name)}
                >
                  {company.attributes.name}
                </li>
              ) : (
                <React.Fragment key={company.id}></React.Fragment>
              )
            )}
          </ul>
        </div>
        {/* <Link to={"/questionnaire"}> */}
        <Button
          title="Go Back"
          kind="button"
          color="pink-outline"
          action={handleReturn}
          // action={() => {setWarning("");}}
        />
        {/* </Link> */}
      </div>
    </React.Fragment>
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
              console.log("submitting", answers, companyId, badgeId.current);
              // badgeId.current= companies[companyId].attributes.badges.data;
              badgeCalc(answers, companyId, badgeId.current);
              toSubmit.current = false;
              navigate("/confirm");
            }
            resolve();
          }, 500);
        });
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <React.Fragment>
          <Navigation></Navigation>
          <Form>
            <div className="questionnaire">
              {category === badges.length || (!badges && !questions) ? (
                <h1>Please confirm your choices</h1>
              ) : (
                <React.Fragment key="93" />
              )}
              <h1 className="head-quest" key="20">
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
                  action={() => {
                    setCompanyId(0);
                    setCompanySearch("");
                  }}
                />
              </Link>
            ) : (
              <Button
                color="dark-pink"
                title="Back"
                kind="button"
                action={handleBack}
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
        </React.Fragment>
      )}
    </Formik>
  );
};
