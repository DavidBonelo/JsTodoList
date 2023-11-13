import "./css/style.css";
import Todo from "./js/models/todo.js";

const todo = new Todo(
  "Buy milk",
  "buy 3 bottles of HappyCow milk",
  Date.now(),
  "high",
  "default"
);
console.log(todo);
