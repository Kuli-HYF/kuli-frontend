import "./FormStart.css";

import { Link } from "react-router-dom";

import { Button } from "../../components/button/Button";

const FormStart = () => {
  return (
    <>
      <div className="survey-intro__container">
        <div className="survey-intro__title">
          <h2>Our System</h2>
        </div>
        <div className="survey-intro__body-container">
          <p className="survey-intro__body-text">
            The Kuli system was created to help employees and companies evaluate
            gender equality inside the organization. In order to do this, Kuli
            provides a series of questionnaires that allow users asses different
            aspects of a company's working environment, internal dynamics and
            more.
          </p>
          <p className="survey-intro__body-text">
            Questionnaires are divided into 5 different categories that focus on
            different aspects:
          </p>
          <ul className="survey-intro__category-list">
            <li className="survey-intro__category-list__item">Employment and compensation</li>
            <li className="survey-intro__category-list__item">Work life balance and career development</li>
            <li className="survey-intro__category-list__item">Health, safety and freedom from violence</li>
            <li className="survey-intro__category-list__item">Governance and leadership</li>
          </ul>
        </div>
        <div className="buttons">
          <Link to={"/"}>
            <Button title="Home" color="dark-blue" />
          </Link>
          <Link to={"/"}>
            <Button title="To questionnaire" color="dark-blue" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormStart;
