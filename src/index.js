import "./css/style.css";
import ScreenController from "./js/ScreenController.js";
import TodosController from "./js/todosController.js";

const todosController = new TodosController();

todosController.addTodo({
  title: "Buy milk",
  description: "buy 3 bottles of HappyCow milk",
  dueDate: Date.now(),
  priority: "high",
  project: "default",
});

const screenController = new ScreenController(todosController);
