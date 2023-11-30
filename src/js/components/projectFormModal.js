export default class ProjectFormModal {
  dialog = document.getElementById("project-dialog");
  form = document.getElementById("project-form");
  nameInput = document.getElementById("name");
  onSave;

  constructor() {
    this.form.onsubmit = (e) => this.formSubmit(e);
  }

  open(onSave) {
    this.onSave = onSave;
    this.dialog.showModal();
  }

  close() {
    this.form.reset();
    this.dialog.close();
    this.onSave = undefined;
  }

  formSubmit(e) {
    e.preventDefault();
    this.onSave(this.nameInput.value);
    this.close();
  }
}
