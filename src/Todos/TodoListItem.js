import React from "react";
import './Todolist.css'

const TodoListItem = ({todo}) => (
    <div className="list-item">
        <h3> {todo.text} </h3>
        <div>
            <button>Mark As Complete</button>
            <button>Remove</button>
        </div>
    </div>
)

export default TodoListItem;