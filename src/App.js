import "./App.css";
import React, { useState } from "react";

import TodoCard from "./TodoCard.js";

function App() {
  const [inputText, setInputText] = useState(""); // used for capturing input
  const [cardList, updateCardList] = useState([]); // list of cards for maintaining todo items

  // used for setting the input text to a specific value
  const inputUpdateHandler = (event) => {
    setInputText(event.target.value);
  };

  // used for grabbing text from input box and creating a new card with that text
  const addCard = (event) => {
    event.preventDefault(); // we don't want to reload the form since it will get rid of the cards

    // if input is not blank, add new card with the input text
    if (inputText.trim() !== "") {
      updateCardList([...cardList, inputText]);
      setInputText("");
    }
  };

  const removeCard = (removeIndex) => {
    // create a new array without the card we want to remove
    const remainingCards = cardList.filter((_, index) => index !== removeIndex);

    // update the list to reflect the removed card
    updateCardList(remainingCards);
  };

  // const style = {
  //   background: 'url("/src/topo.jpg")',
  //   backgroundSize: "cover",
  //   minHeight: "100vh",
  // };
  return (
    <div className="App">
      <header>
        <h1 className="text-info bg-dark">ToDo List</h1>
        <form className="form-inline" onSubmit={addCard}>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputPassword2" className="sr-only"></label>
            <input
              type="text"
              className="form-control bg-secondary"
              value={inputText}
              onChange={inputUpdateHandler}
              placeholder="Type to name of a new task here"
            />
          </div>
          <button
            type="submit"
            className="btn btn-info mb-2 w-50 text-white border border-white"
          >
            Create Task
          </button>
        </form>
      </header>
      <div className="col d-flex justify-content-center">
        <div className="vstack gap-2">
          {cardList.map((input, index) => (
            <TodoCard
              key={index}
              index={index}
              task={input}
              delete={() => removeCard(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
