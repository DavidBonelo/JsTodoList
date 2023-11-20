import "./css/style.css";
import TodoView from "./js/components/todoView.js";
import Todo from "./js/models/todo.js";
import TodosController from "./js/todosController.js";

const todosController = new TodosController();

todosController.addTodo({
  title: "Buy milk",
  description: "buy 3 bottles of HappyCow milk",
  dueDate: Date.now(),
  priority: "high",
  project: "default",
});

const todos = todosController.getTodos();

for (const todo of todos) {
  new TodoView(todo);
}
