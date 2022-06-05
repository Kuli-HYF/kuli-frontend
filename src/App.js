import "./App.css";

import { Button } from "./components/button/Button";
import { get } from "./api/get";
import { populate } from "./api/populate";
import { update } from "./api/update";

function App() {
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

  const handleUpdate = async (event) => {
    // function takes 'category' ="" 'id'=0 'value'=""
    const search = event.target.parentElement.children[0].value;
    const result = await update("tests", 1, search);
    console.log("update", result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> welcome to Kuli</h1>
      </header>
      <div className="test-btn">
        <input type="input"></input>
        <Button color="blue" action={handleGet} title="get" />
        <Button color="orange" action={handlePopulate} title="populate" />
        <Button color="green" action={handleUpdate} title="update" />
      </div>
    </div>
  );
}

export default App;
