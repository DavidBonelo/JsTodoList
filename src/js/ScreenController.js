import TodoFormModal from "./components/todoFormModal.js";
import TodoView from "./components/todoView.js";

export default class ScreenController {
  constructor(todosController) {
    this.todosController = todosController;
    this.todoFormModal = new TodoFormModal();
    this.addBtn = document.getElementById("add-todo").onclick = () =>
      this.todoFormModal.open(this.addTodo.bind(this));

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
