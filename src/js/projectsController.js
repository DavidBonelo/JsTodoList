import Project from "./models/project.js";

export default class ProjectsController {
  projects = [];

  constructor() {
    if (this.projects.length < 1) this.addProject("default");
  }

  getProjects() {
    return this.projects;
  }

  addProject(name) {
    const project = new Project({ name });
    this.projects.push(project);
    return project;
  }

  removeProject(projectId) {
    const projectIdx = this.projects.findIndex((p) => p.id === projectId);
    if (projectIdx === -1) return undefined;
    this.projects.splice(projectIdx, 1);
  }
}
