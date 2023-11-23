import TodoFormModal from "./components/todoFormModal.js";
import TodoView from "./components/todoView.js";

export default class ScreenController {
  todoFormModal = new TodoFormModal();
  todosDiv = document.querySelector(".todos");
  addBtn = document.getElementById("add-todo");

  constructor(todosController) {
    this.todosController = todosController;
    this.addBtn.onclick = () =>
      this.todoFormModal.open(this.addTodo.bind(this));

    const todos = todosController.getTodos();
    console.log(todos);
    this.renderTodos(todos);
  }

  addTodo(values) {
    const todo = this.todosController.addTodo(values);
    this.renderTodo(todo);
  }

  editTodo(todoView) {
    this.todoFormModal.setInpputs(todoView.todo);
    this.todoFormModal.open((values) => {
      const newTodo = this.todosController.editTodo(todoView.todo.id, values);
      todoView.setTodo(newTodo);
    });
  }

  renderTodos(todos) {
    for (const todo of todos) {
      this.renderTodo(todo);
    }
  }

  renderTodo(todo) {
    const todoView = new TodoView({ ...todo }, this.editTodo.bind(this));
    this.todosDiv.appendChild(todoView.todoDiv);
  }
}
