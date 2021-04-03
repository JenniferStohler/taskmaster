import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor(name, listId, id = generateId()) {
    this.id = id
    this.name = name
    this.listId = listId
  }

  get Template() {

    return `<li>${this.name}</li> `
  }
}