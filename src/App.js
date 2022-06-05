import "./App.css";

import { Button } from "./components/button/Button";
import { get } from "./api/get";
import { populate } from "./api/populate";
import { put } from "./api/put";
import { post } from "./api/post";
import { Delete } from "./api/delete";

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
    // function takes 'category' ="" 'id'=0 'value'={}
    const search = event.target.parentElement.children[0].value;
    const body = {
      data: {
        name: search,
      },
    };
    const result = await put("tests", 1, body);
    console.log("update", result);
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

  return (
    <div className="App">
      <header className="App-header">
        <h1> welcome to Kuli</h1>
      </header>
      <div className="test-btn">
        <input type="input"></input>
        <Button color="blue" action={handleGet} title="get" />
        <Button color="orange" action={handlePopulate} title="populate" />
        <Button color="purple" action={handleUpdate} title="update" />
        <Button color="green" action={handleAdd} title="add" />
        <Button color="red" action={handleDelete} title="delete" />
      </div>
    </div>
  );
}

export default App;
