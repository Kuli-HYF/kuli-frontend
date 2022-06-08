import { Link } from "react-router-dom";

import { Button } from "../../components/button/Button";

const FormStart = () => {
  return (
    <>
      <div>badges home</div>
      <Link to={"/form"}>
        <Button title="go to form" />
      </Link>
    </>
  );
};

export default FormStart;
