export default class TodoView {
  todoDiv;

  constructor(todo) {
    this.todo = todo;
    this.todoDiv = this.buildTodo(todo);
    this.todosDiv = document.querySelector(".todos");
    this.todosDiv.appendChild(this.todoDiv);
  }

  buildTodo(todo) {
    const todoDiv = document.createElement("div");
    todoDiv.dataset.id = todo.id;
    todoDiv.classList.add("todo");
    todoDiv.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>
    `;
    return todoDiv;
  }
}
