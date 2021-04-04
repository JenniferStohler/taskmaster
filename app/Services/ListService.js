import { ProxyState } from "../AppState.js";
import Pizza from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListService {
  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(li => li.id != id)
    saveState()
  }
  addList(newList) {
    ProxyState.lists = [...ProxyState.lists, new List(newList.name)]
    saveState()
  }
}

export const listsService = new ListService();