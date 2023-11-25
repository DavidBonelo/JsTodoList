export default class Project {
  id = window.crypto.randomUUID();

  constructor(name) {
    this.name = name;
  }
}
