function TodoCard() {
  return (
    <div class="container mt-1">
      <div class="card">
        <div class="card-body d-flex">
          <div class="flex-grow-1">
            <p>This is my cool item</p>
          </div>
          <button type="button" class="btn btn-danger ml-0">
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
