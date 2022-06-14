import "./Congratulate.css";

export const Congratulate = () => {
  return (
    <div className="wrap">
      <div>
        <h1 className="header">Thank You!</h1>
        <h3 className="subHead">
          Your feedback has been successfully submitted
        </h3>
      </div>
      <div className="cta">
        <p className="boxed">
          Become an official member of the Kuli community (sign-up can be done
          anonymously)
        </p>
        <p className="boxed">
          Or continue to browse our growing library of companies and badges
        </p>
      </div>
    </div>
  );
};
