import {observable, autorun, action} from 'mobx';
import TodoModel from './TodoModel';

class TodoStore {
    @observable todos= []
    lastID = 0

    @observable
    todosAll = [];

    @action
    addTodo(title) {
        this.todos = this.todosAll;
        this.todos.push(new TodoModel(this, title, false, this.lastID ++, false))
        this.todosAll = this.todos;
        this.todosAll.forEach(todo => {
        });
    }
    @action
  removeTodo(currentid) {
    console.log("destroy id: " + currentid);
    this.todosAll.remove(this.todosAll[currentid]);
    this.lastId = this.lastId - 1;
    this.todosAll.forEach(todo => {
      if (todo.id > currentid) {
        todo.id = todo.id - 1;
      } else if (todo.id < currentid) {
        todo.id = todo.id;
      }
    });
    this.todos = this.todosAll;
  }
  @action
  All() {
    autorun(() => {
      this.todos = this.todosAll.filter(todo => todo.completed !== "");
    });
  }
  @action
  Active() {
    autorun(() => {
      this.todos = this.todosAll.filter(todo => todo.completed === false);
    });
  }
  @action
  Complete() {
    autorun(() => {
      this.todos = this.todosAll.filter(todo => todo.completed === true);
    });
  }
  @action
  Clear() {
    for (let i = 0; i < this.todosAll.length; i++) {
      if (this.todosAll[i].completed === true) {
        this.todosAll.remove(this.todosAll[i]);
        this.todosAll.forEach(todo => {
          if (todo.id > i) {
            todo.id = todo.id - 1;
          } else if (todo.id < i) {
            todo.id = todo.id;
          }
        });
        this.lastId--;
        i--;
      }
    }
    this.todos = this.todosAll;
  }


}

const store= new TodoStore()
export default store