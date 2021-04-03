  
import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
//import { saveState } from "../Utils/LocalStorage.js";

class ListService {
  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  addList(newList) {
    ProxyState.list.push = [...ProxyState.list, new Lists(newList.name)]
    saveState()
    ProxyState.list = ProxyState.list
  }
}

export const listService = new ListService();

