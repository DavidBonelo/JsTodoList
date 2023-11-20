export default class TodoView {
  constructor(todo, onEdit) {
    this.todo = todo;
    this.onEdit = onEdit;
    this.todoDiv = document.createElement("div");
    this.renderTodo();
  }

  renderTodo() {
    console.log(this);
    this.todoDiv.dataset.id = this.todo.id;
    this.todoDiv.classList.add("todo");
    this.todoDiv.innerHTML = `
        <h3>${this.todo.title}</h3>
        <p>${this.todo.description}</p>
    `;
    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.onclick = () => this.onEdit(this);
    this.todoDiv.appendChild(editBtn);
  }

  updateTodo(todo) {
    this.todo = todo;
    this.renderTodo();
  }
}
