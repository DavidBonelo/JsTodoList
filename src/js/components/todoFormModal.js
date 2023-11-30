export default class TodoFormModal {
  dialog = document.getElementById("dialog");
  form = document.getElementById("todo-form");
  inputs = {};
  onSave;

  constructor() {
    this.cacheInputs();
    this.form.onsubmit = (e) => this.formSubmit(e);
  }

  cacheInputs() {
    this.inputs.title = document.getElementById("title");
    this.inputs.description = document.getElementById("description");
    this.inputs.dueDate = document.getElementById("dueDate");
    this.inputs.priority = document.getElementById("priority");
    this.inputs.completed = document.getElementById("completed");
  }

  open(onSave) {
    this.onSave = onSave;
    this.dialog.showModal();
  }

  setInpputs(values) {
    this.inputs.title.value = values.title;
    this.inputs.description.value = values.description;
    this.inputs.dueDate.value = values.dueDate;
    this.inputs.priority.value = values.priority;
    this.inputs.completed.checked = values.completed;
  }

  close() {
    this.form.reset();
    this.dialog.close();
    this.onSave = undefined;
  }

  formSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this.form));
    this.onSave(data);
    this.close();
  }
}
