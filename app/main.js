  
import IngredientsController from "./Controllers/IngredientsController.js";
import PizzasController from "./Controllers/PizzasController.js";

class App {
  pizzasController = new PizzasController();
  ingredientsController = new IngredientsController();
}

window["app"] = new App();
