
  
import { tasksService } from "../Services/TaskService.js";


//Public
export default class TaskController {

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