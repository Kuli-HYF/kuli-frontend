import "./App.css";

import { get } from "./api/get";
import { Button } from "./components/button/Button";

function App() {
  const handleGet = async (event) => {
    const search = event.target.parentElement.children[0].value;
    const result = await get(search);
    console.log("get", result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> welcome to Kuli</h1>
      </header>
      <div className="test-btn">
        <input type="input"></input>
        <Button action={handleGet} title="get" />
      </div>
    </div>
  );
}

export default App;
