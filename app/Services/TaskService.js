
import { ProxyState } from "../AppState.js";
import Ingredient from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TaskService {
  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    saveState()

  }
  addTask(newTask) {
    ProxyState.tasks.push(new Task(newTask.name, newTask.listId))
    saveState()
    ProxyState.tasks = ProxyState.tasks
  }
}

export const tasksService = new TaskService();