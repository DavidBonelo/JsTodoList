import Project from "./models/project";

export default class ProjectsController {
  projects = [];

  constructor(todosController) {
    this.todosController = todosController;
    if (this.projects.length < 1) {
      this.projects.push(new Project("default"));
    }
  }

  getProjects() {
    return this.projects;
  }

  addProject(name) {
    const project = new Project(name);
    this.projects.push(project);
    return project;
  }

  removeProject(projectId) {
    const projectIdx = this.projects.findIndex((p) => p.id === projectId);
    if (projectIdx === -1) return undefined;
    this.todosController.removeTodosByProject(this.projects[projectIdx].name);
    this.projects.splice(projectIdx, 1);
  }
}
