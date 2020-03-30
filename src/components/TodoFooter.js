import EraseCompleted from "./EraseCompleted";
import React, { Component } from "react";
import TodoStore from '../stores/TodoStore'
import { observer } from "mobx-react";
@observer
class TodoFooter extends Component {
  constructor(props) {
    super(props);
    this.active = this.active.bind(this);
    this.complete = this.complete.bind(this);
    this.all = this.all.bind(this);

    this.state = {
      selectedAll: true,
      selectedActive: false,
      selectedComplete: false
    };
  }
  all() {
    this.setState({
      selectedAll: true,
      selectedActive: false,
      selectedComplete: false
    });
    TodoStore.All();
  }
  active() {
    this.setState({
      selectedAll: false,
      selectedActive: true,
      selectedComplete: false
    });
    TodoStore.Active();
  }
  complete() {
    this.setState({
      selectedAll: false,
      selectedActive: false,
      selectedComplete: true
    });
    TodoStore.Complete();
  }

  render() {
    if (TodoStore.todosAll.length > 0) {
      return (
        <div className="footer">
          <button className="todo-count">
            <span>
              {TodoStore.todosAll.filter(todo => todo.completed === false).length}
            </span>
            <strong> task(s) left </strong>
          </button>
          <ul className="filters">
            <li onClick={this.all}>
              <button>
                <a className={this.state.selectedAll ? "selected" : " "}>
                  {" "}
                  All tasks
                </a>
              </button>
            </li>

            <li onClick={this.active}>
              <button type="submit">
                <a className={this.state.selectedActive ? "selected" : " "}>
                  {" "}
                  Active tasks
                </a>
              </button>
            </li>

            <li onClick={this.complete}>
              <button type="submit">
                <a className={this.state.selectedComplete ? "selected" : " "}>
                  Completed tasks
                </a>
              </button>
            </li>
          </ul>
          <EraseCompleted />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default TodoFooter;
