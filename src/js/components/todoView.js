export default class TodoView {
  constructor(todo, onEdit, onDelete) {
    this.todo = todo;
    this.onEdit = onEdit;
    this.onDelete = onDelete;
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
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.onclick = () => this.deleteClick();
    this.todoDiv.appendChild(deleteBtn);
  }

  setTodo(todo) {
    this.todo = todo;
    this.renderTodo();
  }

  deleteClick() {
    this.onDelete(this.todo.id);
    this.todoDiv.remove();
  }
}
