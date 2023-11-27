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
    return todo;
  }

  editTodo(todoId, values) {
    const todo = this.todos.find((t) => t.id === todoId);
    return Object.assign(todo, values);
  }

  removeTodo(todoId) {
    const todoIdx = this.todos.findIndex((t) => t.id === todoId);
    if (todoIdx === -1) return undefined;
    this.todos.splice(todoIdx, 1);
  }

  removeTodosByProject(projectId) {
    this.todos = this.todos.filter((t) => t.project?.id != projectId);
  }
}
