import "./App.css";
import React, { useState } from "react";

import TodoCard from "./TodoCard.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [cardList, updateCardList] = useState([]);

  const inputUpdateHandler = (e) => {
    setInputText(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (inputText.trim() !== "") {
      updateCardList([...cardList, inputText]);
      setInputText("");
    }
  };
  // const style = {
  //   background: 'url("/src/topo.jpg")',
  //   backgroundSize: "cover",
  //   minHeight: "100vh",
  // };
  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
        <form class="form-inline" onSubmit={formHandler}>
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only"></label>
            <input
              type="text"
              class="form-control"
              value={inputText}
              onChange={inputUpdateHandler}
              placeholder="Type to name of a new task here"
            />
          </div>
          <button type="submit" class="btn btn-primary mb-2 w-50">
            Create Task
          </button>
        </form>
      </header>
      <div class="col d-flex justify-content-center">
        <div class="vstack gap-2">
          {cardList.map((input, index) => (
            <TodoCard key={index} task={input} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
