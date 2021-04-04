import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor(name, size, id = generateId()) {
    this.id = id
    this.name = name
    
  }


  get Template() {
    return `
    <div class="col-md-4">
      <div class="bg-white rounded">
          <div class="text-center ${this.name} p-2 d-flex justify-content-between">
              
              <i class="fas fa-times ml-2" onclick="app.listsController.deleteList('${this.id}')"></i>
          </div>
          <div class="p-3">
              <ul>
                  ${this.Tasks}
              </ul>
          </div>
          <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
              <input type="text" name="taskname" id="taskname" class="form-control" placeholder="Add Task..."
                  aria-describedby="helpId">
              <button type="submit" class="btn btn-success" title='add task'>Add Task!</button>
          </form>
      </div>
    </div>
    `
  }

  get Ingredients() {
    let task = ProxyState.tasks.filter(i => li.listId === this.id)
    let template = ''
    task.forEach(li => template += li.Template)
    return template
  }

}
