import { Link } from "react-router-dom";

import { Button } from "../../components/button/Button";

const FormStart = () => {
  return (
    <>
      <div>badges home</div>
      <Link to={"/"}>
        <Button title="go home" />
      </Link>
    </>
  );
};

export default FormStart;
