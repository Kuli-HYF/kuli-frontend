import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import CompanyStart from "./pages/companies/CompanyStart";
import FormStart from "./pages/form/FormStart";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/badges" element={<FormStart />} />
          <Route path="/companies" element={<CompanyStart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
