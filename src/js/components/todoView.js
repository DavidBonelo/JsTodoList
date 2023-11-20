export default class TodoView {
  todoDiv;

  constructor(todo) {
    this.todo = todo;
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
    return todoDiv;
  }
}
