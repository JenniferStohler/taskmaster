import TaskController from "../app/Controllers/TaskController.js";
import ListController from "../app/Controllers/ListController.js"; 

class App {
  taskController = new TaskController();
  listController = new ListController();
}

window["app"] = new App();
