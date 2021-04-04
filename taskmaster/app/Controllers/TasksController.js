
  
import { tasksService } from "../Services/TasksService.js";


//Public
export default class TasksController {

  addTask(listId) {
    window.event.preventDefault()
    let form = window.event.target
    let rawTask = {
      name: form['name'].value,
      listId: listId
    }
    tasksService.addTask(rawTask)
    // @ts-ignore
    form.reset()
  }

  deleteTask(id) {
    debugger
    tasksService.deleteTask(id)
  }

}