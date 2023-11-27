export default class ProjectView {
  selected = false;

  constructor(project, onClick, onDelete) {
    this.project = project;
    this.onClick = onClick;
    this.onDelete = onDelete;
    this.projectDiv = document.createElement("div");
    this.renderProject();
  }

  renderProject() {
    this.projectDiv.innerText = this.project.name;
    this.projectDiv.classList.add("project");
    this.projectDiv.onclick = () => this.handleClick();
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "x";
    deleteButton.onclick = this.deleteProject.bind(this);
    this.projectDiv.appendChild(deleteButton);
  }

  deleteProject(event) {
    event.stopPropagation();
    this.onDelete(this.project.id);
    this.projectDiv.remove();
  }

  setSelected(bool) {
    this.selected = bool;
    if (this.selected) this.projectDiv.classList.add("selected");
    else this.projectDiv.classList.remove("selected");
  }

  handleClick() {
    this.setSelected(!this.selected);
    this.onClick(this);
  }
}
