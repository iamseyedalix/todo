import React, {Component} from 'react'
import {observer} from 'mobx-react'
import TodoStore from '../stores/TodoStore'

@observer
class TodoItem extends Component {
    onToggle= () =>{
        this.props.todo.toggle()
    };
    constructor(props) {
         super(props);
         this.deletetodoo = this.deletetodoo.bind(this);
        }
    deletetodoo() {
      TodoStore.removeTodo(this.props.todo.id);
     }

    render() {
        const { todo } = this.props;
        return(
                <li className={todo.completed ? "completed" : " "}>
                    <div className="view">
                        <input
                        onChange={this.onToggle}
                         type="checkbox"
                         className="toggle"
                         value="on"
                         checked={todo.completed}
                         />
                        <label>{todo.title}</label>
                        <button className="destry" onClick={this.deletetodoo} />
                    </div>
                </li>
        );
    }

}
export default TodoItem;