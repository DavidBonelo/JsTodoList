export default class TodoFormModal {
  dialog = document.getElementById("dialog");
  form = document.getElementById("todo-form");
  onSave;

  constructor() {
    this.form.onsubmit = (e) => this.formSubmit(e);
  }


  open(onSave) {
    this.onSave = onSave;
    this.dialog.show();
  }

  close() {
    this.dialog.close();
    this.onSave = undefined;
  }

  formSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this.form));
    console.log(data);
    this.onSave(data);
    this.dialog.close();
  }
}
