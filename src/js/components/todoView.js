export default class TodoView {
  todoDiv;

  constructor(todo) {
    this.todo = todo;
    this.buildTodo(todo);
  }

  buildTodo(todo) {
    const todoDiv = document.createElement("div");
    todoDiv.dataset.id = todo.id;
    todoDiv.classList.add("todo");
    todoDiv.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>
    `;
    this.todoDiv = todoDiv;
    document.body.appendChild(todoDiv);
  }
}
