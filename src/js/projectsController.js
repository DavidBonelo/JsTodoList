import Project from "./models/project.js";

export default class ProjectsController {
  projects = [];

  constructor() {
    const lsProjects = JSON.parse(localStorage.getItem("projects"));
    this.load(lsProjects);

    if (this.projects.length < 1) this.addProject("default");
  }

  getProjects() {
    return this.projects;
  }

  addProject(name) {
    const project = new Project({ name });
    this.projects.push(project);
    this.save();
    return project;
  }

  removeProject(projectId) {
    const projectIdx = this.projects.findIndex((p) => p.id === projectId);
    if (projectIdx === -1) return undefined;
    this.projects.splice(projectIdx, 1);
    this.save();
  }

  save() {
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }

  load(lsProjects) {
    if (lsProjects && lsProjects.length) {
      this.projects = lsProjects.map((p) => new Project(p));
      this.save();
    }
  }
}
