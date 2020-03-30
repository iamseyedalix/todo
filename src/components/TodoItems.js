import React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoStore from "../stores/TodoStore"
import {observer} from 'mobx-react'

@observer
class TodoItems extends Component {
    render() {
        return(
             <section className="main">
            <ul className="todo-list"> {
                TodoStore.todos.map(todo=>{
                    return(
                        <TodoItem key={todo.id} todo= {todo} />
                    )
                })
            }
            </ul>
            </section>
        );
    }

}
export default TodoItems;