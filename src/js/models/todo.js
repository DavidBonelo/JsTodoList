export default class Todo {
  id = window.crypto.randomUUID();
  completed = false;

  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }
  setCompleted(bool) {
    this.completed = bool;
  }
}