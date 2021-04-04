import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListService.js";
import { loadState } from "../Utils/LocalStorage.js";


//Private
function _draw() {
  let lists = ProxyState.lists;
  let template = ''
  if (lists.length == 0) {
    template += '<div class="col text-center"><p><em>no lists</em><p></div>'
  }
  lists.forEach(li => template += li.Template)
  document.getElementById("lists").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    ProxyState.on("lists", _draw);
    ProxyState.on("tasks", _draw);
    loadState()
    _draw()
  }

  addList() {
    window.event.preventDefault()
    let form = window.event.target
    let rawList = {
      name: form['name'].value
    }
    listsService.addList(rawList)
    // @ts-ignore
    form.reset()
  }

  deleteList(id) {
    listsService.deleteList(id)
  }
}