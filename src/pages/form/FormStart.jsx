import "./FormStart.css";

import { Link } from "react-router-dom";

import { Button } from "../../components/button/Button";

const FormStart = () => {
  return (
    <div className="container">
      <div className="survey-intro__container">
        <div className="survey-intro__title">
          <h2>Our System</h2>
        </div>
        <div className="survey-intro__body-container">
          <p className="survey-intro__body-text">
            Kuli provides a questionnaire that allows users to asses different
            aspects of a company's working environment, internal dynamics and
            more.
          </p>
          <p className="survey-intro__body-text">
            Questionnaires are divided into 4 different categories that focus on
            different aspects:
          </p>
          <ul className="survey-intro__category-list">
            <li className="survey-intro__category-list__item">
              Employment and compensation
            </li>
            <li className="survey-intro__category-list__item">
              Work life balance and career development
            </li>
            <li className="survey-intro__category-list__item">
              Health, safety and freedom from violence
            </li>
            <li className="survey-intro__category-list__item">
              Governance and leadership
            </li>
          </ul>
        </div>
        <div className="buttons">
          <Link to={"/form"}>
            <Button title="To questionnaire" color="dark-blue" />
          </Link>
          <Link to={"/sign-up"}>
            <Button title="Sign Up" color="dark-blue" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormStart;
