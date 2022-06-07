import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";

import { Button } from "../../components/button/Button";

const FormStart = () => {
  return (
    <>
      <Navigation />
      <div>badges home</div>

      <Link to={"/"}>
        <Button title="go home" />
      </Link>
    </>
  );
};

export default FormStart;
