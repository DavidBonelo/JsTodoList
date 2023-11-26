import "./css/style.css";
import TodosController from "./js/todosController.js";
import ScreenController from "./js/ScreenController.js";
import ProjectsController from "./js/projectsController.js";

const todosController = new TodosController();
const projectsController = new ProjectsController();

todosController.addTodo({
  title: "Buy milk",
  description: "buy 3 bottles of HappyCow milk",
  dueDate: Date.now(),
  priority: "high",
  project: "default",
});

const screenController = new ScreenController(
  todosController,
  projectsController
);
