import "./css/style.css";
import TodosController from "./js/todosController.js";
import ScreenController from "./js/ScreenController.js";
import ProjectsController from "./js/projectsController.js";

const todosController = new TodosController();
const projectsController = new ProjectsController();

const screenController = new ScreenController(
  todosController,
  projectsController
);
