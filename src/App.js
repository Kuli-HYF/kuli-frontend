import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import CompanyStart from "./pages/companies/CompanyStart";
import FormStart from "./pages/form/FormStart";
// import { Button } from "./components/button/Button";
import { Former } from "./pages/form/Form";
import { Congratulate } from "./pages/congratulate/Congratulate";
import { AboutBadges } from "./pages/about-badges/AboutBadges";
import { AboutUs } from './pages/about-us/AboutUs';

/*
import { Button } from "./components/button/Button";
import { get } from "./api/get";
import { populate } from "./api/populate";
import { put } from "./api/put";
import { post } from "./api/post";
import { Delete } from "./api/delete";
*/

function App() {
  /*
  const handleGet = async (event) => {
    const search = event.target.parentElement.children[0].value;
    const result = await get(search);
    console.log("get", result);
  };

  const handlePopulate = async (event) => {
    const search = event.target.parentElement.children[0].value;
    const result = await populate(search);
    console.log("populate", result);
  };

  const handleAdd = async (event) => {
    // function takes 'category' ="" 'value'={}
    const search = event.target.parentElement.children[0].value;
    const body = {
      data: {
        name: search,
      },
    };
    const result = await post("tests", body);
    console.log("add", result);
  };

  const handleDelete = async (event) => {
    // function takes 'value' ="" 'id'=0
    const search = Number(event.target.parentElement.children[0].value);
    const result = await Delete("tests", search);
    console.log("delete", result);
  };

  */

  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/badges" element={<AboutBadges />} />
          <Route path="/companies" element={<CompanyStart />} />
          <Route path="/form" element={<Former />}></Route>
          <Route path="/sign-up" element={"sign-up"} />
          <Route path="/confirm" element={<Congratulate />} />
          <Route path="/form" element={"form"} />
          <Route path="/sign-up" element={"sign-up"} />
          <Route path="/questionnaire" element={<FormStart />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>

      {/* <div className="test-btn">
        <input type="input"></input>
        <Button color="blue" action={handleGet} title="get" />
        <Button color="orange" action={handlePopulate} title="populate" />
        <Button color="purple" action={handleUpdate} title="update" />
        <Button color="green" action={handleAdd} title="add" />
        <Button color="red" action={handleDelete} title="delete" />
      </div> */}
    </Router>
  );
}

export default App;
