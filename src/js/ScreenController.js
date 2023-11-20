import TodoView from "./components/todoView.js";

export default class ScreenController {
  constructor(todosController) {
    this.todosController = todosController;
    this.addBtn = document.getElementById("add-todo").onclick = () =>
      this.addTodo({
        title: "Buy more milk",
        description: "buy 3 bottles of HappyCow milk",
        dueDate: Date.now(),
        priority: "high",
        project: "default",
      });

    const todos = todosController.getTodos();
    console.log(todos);
    this.renderTodos(todos);
  }

  addTodo(values) {
    const todo = this.todosController.addTodo(values);
    new TodoView(todo);
  }

  renderTodos(todos) {
    for (const todo of todos) {
      new TodoView(todo);
    }
  }
}
