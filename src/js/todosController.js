import Todo from "./models/todo.js";

export default class TodosController {
  todos = [];

  constructor() {
    const lsTodos = JSON.parse(localStorage.getItem("todos"));
    this.load(lsTodos);
    if (this.todos.length < 1) {
      this.addTodo({
        title: "Buy milk example",
        description: "buy 3 bottles of HappyCow milk",
        dueDate: new Date().toISOString().split('T')[0],
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
    this.save();
    return todo;
  }

  editTodo(todoId, values) {
    const todo = this.todos.find((t) => t.id === todoId);
    const newTodo = Object.assign(todo, values);
    this.save();
    return newTodo;
  }

  removeTodo(todoId) {
    const todoIdx = this.todos.findIndex((t) => t.id === todoId);
    if (todoIdx === -1) return undefined;
    this.todos.splice(todoIdx, 1);
    this.save();
  }

  removeTodosByProject(projectId) {
    this.todos = this.todos.filter((t) => t.project?.id != projectId);
    this.save();
  }

  getTodosByProject(project) {
    if (!project) return this.todos;
    return this.todos.filter((t) => t.project?.id === project.id);
  }

  save() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  load(lsTodos) {
    if (lsTodos && lsTodos.length) {
      this.todos = lsTodos.map((t) => new Todo(t));
      this.save();
    }
  }
}
