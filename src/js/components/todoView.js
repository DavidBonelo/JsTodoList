export default class TodoView {
  constructor(todo, onEdit, onDelete) {
    this.todo = todo;
    this.onEdit = onEdit;
    this.onDelete = onDelete;
    this.todoDiv = document.createElement("div");
    this.renderTodo();
  }

  renderTodo() {
    this.todoDiv.dataset.id = this.todo.id;
    this.todoDiv.classList.add("todo");
    this.updateStyles();
    this.todoDiv.innerHTML = `
        ${this.todo.priority ? "<span>" + this.todo.priority + "</span>" : ""}
        <h3>${this.todo.title}</h3>
        <p>${this.todo.description}</p>
        <p>${this.todo.dueDate}</p>
        ${this.todo.project ? "<p>" + this.todo.project.name + "</p>" : ""}
    `;

    const completedCheckbox = document.createElement("input");
    completedCheckbox.type = "checkbox";
    completedCheckbox.checked = this.todo.completed;
    this.todoDiv.insertBefore(completedCheckbox, this.todoDiv.firstChild);

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.onclick = () => this.onEdit(this);
    this.todoDiv.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.onclick = () => this.deleteClick();
    this.todoDiv.appendChild(deleteBtn);
  }

  updateStyles() {
    if (this.todo.completed) {
      this.todoDiv.classList.add("completed");
    } else {
      this.todoDiv.classList.remove("completed");
    }

    switch (this.todo.priority) {
      case "low":
        this.todoDiv.classList.add("prio-low");
        break;
      case "mid":
        this.todoDiv.classList.add("prio-mid");
        break;
      case "high":
        this.todoDiv.classList.add("prio-high");
        break;

      default:
        this.todoDiv.classList.remove("prio-low", "prio-mid", "prio-high");
        break;
    }
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
