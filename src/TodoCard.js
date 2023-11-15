function TodoCard(props) {
  return (
    <div className="container mt-1">
      <div
        className="card text-white border border-white"
        style={{
          backgroundColor: props.index % 2 === 0 ? "#9FA6B2" : "#332D2D",
        }}
      >
        <div className="card-body d-flex">
          <div className="flex-grow-1">
            <p>{props.task}</p>
          </div>
          <button
            type="button"
            className="btn btn-info ml-0 text-white"
            onClick={props.delete}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
