import TodoFormModal from "./components/todoFormModal.js";
import TodoView from "./components/todoView.js";
import ProjectView from "./components/projectView.js";

export default class ScreenController {
  todoFormModal = new TodoFormModal();
  todosDiv = document.querySelector(".todos");
  addTodoBtn = document.getElementById("add-todo");
  projectsDiv = document.getElementById("projects");
  addProjectBtn = document.getElementById("add-project");

  constructor(todosController, projectsController) {
    this.todosController = todosController;
    this.projectsController = projectsController;
    this.addTodoBtn.onclick = () =>
      this.todoFormModal.open(this.addTodo.bind(this));
    const project = this.projectsController.addProject("uwuwu");
    this.projectsDiv.appendChild(new ProjectView(project).projectDiv);

    const todos = todosController.getTodos();
    console.log(todos);
    this.renderTodos(todos);
  }

  addTodo(values) {
    // TODO: pass project object to todo
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

  deleteTodo(todoId) {
    this.todosController.removeTodo(todoId);
  }

  renderTodos(todos) {
    for (const todo of todos) {
      this.renderTodo(todo);
    }
  }

  renderTodo(todo) {
    const todoView = new TodoView(
      { ...todo },
      this.editTodo.bind(this),
      this.deleteTodo.bind(this)
    );
    this.todosDiv.appendChild(todoView.todoDiv);
  }
}
