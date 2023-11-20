import Todo from "./models/todo.js";

export default class TodosController {
  todos = [];

  getTodos() {
    return this.todos;
  }

  addTodo(data) {
    const todo = new Todo(
      data.title,
      data.description,
      data.dueDate,
      data.priority,
      data.project
    );
    this.todos.push(todo);
  }

  removeTodo(todoId) {
    const todoIdx = this.todos.findIndex((t) => t.id === todoId);
    if (todoIdx === -1) return undefined;
    this.todos.splice(todoIdx, 1);
  }
}
