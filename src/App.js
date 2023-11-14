import "./App.css";

import TodoCard from "./TodoCard.js";

function App() {
  const style = {
    background: 'url("/src/topo.jpg")',
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <div className="App" style={style}>
      <header>
        <h1>TODO</h1>
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only"></label>
            <input
              type="password"
              class="form-control"
              id="inputPassword2"
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
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
}

export default App;
