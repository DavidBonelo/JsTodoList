export default class Project {
  constructor({ id, name }) {
    this.id = id || window.crypto.randomUUID();
    this.name = name;
  }
}
