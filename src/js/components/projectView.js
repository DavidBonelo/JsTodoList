export default class ProjectView {
  constructor(project, onDelete) {
    this.project = project;
    this.onDelete = onDelete;
    this.projectDiv = document.createElement("div");
    this.renderProject();
  }

  renderProject() {
    this.projectDiv.innerText = this.project.name;
    this.projectDiv.classList.add("project");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "x";
    deleteButton.onclick = () => this.deleteProject();
    this.projectDiv.appendChild(deleteButton);
  }

  deleteProject() {
    this.onDelete(this.project.id);
    this.projectDiv.remove();
  }
}
