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
    this.addProjectBtn.onclick = () => this.addProject();

    const projects = projectsController.getProjects();
    this.renderProjects(projects);
    const todos = todosController.getTodos();
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

  addProject() {
    const project = this.projectsController.addProject("uwuwu");
    this.renderProject(project);
  }

  deleteProject(projectId) {
    this.projectsController.removeProject(projectId);
    this.todosController.removeTodosByProject(projectId);
    console.log(this.projectsController.getProjects());
  }

  renderProjects(projects) {
    projects.map((p) => this.renderProject(p));
  }

  renderProject(project) {
    const projectView = new ProjectView(
      { ...project },
      this.deleteProject.bind(this)
    );
    this.projectsDiv.appendChild(projectView.projectDiv);
  }
}
