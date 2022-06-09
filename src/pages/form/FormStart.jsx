import "./FormStart.css";

import { Link } from "react-router-dom";

import { Button } from "../../components/button/Button";

const FormStart = () => {
  return (
    <div className="container">
      <div className="survey-intro__container fadeIn">
        <div className="survey-intro__title">
          <h2>Kuli Questionnaires</h2>
        </div>
        <div className="survey-intro__body-container">
          <p className="survey-intro__body-text">
            Kuli provides a questionnaire that allows users to asses different
            aspects of a company's working environment, internal dynamics and
            more. Questionnaires are divided into 4 different categories that
            focus on different aspects:
          </p>
          <div className="category-list__container fadeIn">
            <div className="survey-intro__category-list__item fadeIn">
              <img
                src="https://www.freepngimg.com/thumb/facebook/66701-golden-picture-badge-template-icon-free-download-png-hq.png"
                alt="badge"
              />
              <p>Employment and compensation</p>
            </div>
            <div className="survey-intro__category-list__item fadeIn">
              <img
                src="https://www.freepngimg.com/thumb/facebook/66701-golden-picture-badge-template-icon-free-download-png-hq.png"
                alt="badge"
              />
              <p>Work life balance and career development</p>
            </div>
            <div className="survey-intro__category-list__item fadeIn">
              <img
                src="https://www.freepngimg.com/thumb/facebook/66701-golden-picture-badge-template-icon-free-download-png-hq.png"
                alt="badge"
              />
              <p>Health, safety and freedom from violence</p>
            </div>
            <div className="survey-intro__category-list__item fadeIn">
              <img
                src="https://www.freepngimg.com/thumb/facebook/66701-golden-picture-badge-template-icon-free-download-png-hq.png"
                alt="badge"
              />
              <p>Governance and leadership</p>
            </div>
          </div>
        </div>
        <div className="buttons fadeIn">
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
