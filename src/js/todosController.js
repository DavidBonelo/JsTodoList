import Todo from "./models/todo.js";

export default class TodosController {
  todos = [];

  constructor() {
    if (this.todos.length < 1) {
      this.addTodo({
        title: "Buy milk example",
        description: "buy 3 bottles of HappyCow milk",
        dueDate: Date.now(),
        priority: "high",
      });
    }
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todoData) {
    const todo = new Todo(todoData);
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

  getTodosByProject(project) {
    if (!project) return this.todos;
    return this.todos.filter((t) => t.project?.id === project.id);
  }
}
