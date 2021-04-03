
import { taskService } from "../Services/TaskService.js";
//import { loadState } from "../Utils/LocalStorage.js"


export default class TaskController {

  addTask(listId) {
    window.event.preventDefault()
    let form = window.event.target
    let rawTask = {
      name: form['name'].value,
      listId: listId
  }
  
taskService.addTask(rawTask)
    console.log("newTask",rawTask)
  form.reset()

}

deleteTask(id){
  taskService.deleteTask(id)
}

}
