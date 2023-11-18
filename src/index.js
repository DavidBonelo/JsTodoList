import "./css/style.css";
import TodoView from "./js/components/todoView.js";
import Todo from "./js/models/todo.js";

const todo = new Todo(
  "Buy milk",
  "buy 3 bottles of HappyCow milk",
  Date.now(),
  "high",
  "default"
);
console.log(todo);
const todoView = new TodoView(todo);
