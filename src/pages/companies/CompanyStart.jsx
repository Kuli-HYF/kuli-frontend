import { Link } from "react-router-dom";

import { Button } from "../../components/button/Button";

const CompanyStart = () => {
  return (
    <>
      <div>companies home</div>
      <Link to={"/"}>
        <Button title="go home" />
      </Link>
    </>
  );
};

export default CompanyStart;
