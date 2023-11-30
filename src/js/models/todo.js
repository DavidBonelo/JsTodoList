export default class Todo {
  constructor({ id, title, description, dueDate, priority, project, completed }) {
    this.id = id || window.crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = completed || false;
  }
}
