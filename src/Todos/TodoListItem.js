import React from "react";
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onMarkCompleted }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            { todo.isCompleted 
                    ? null 
                    : <button className="mark-complete-button"
                    onClick={() => onMarkCompleted(todo.text)}>
                    Mark As Complete</button>
            }
                           
            <button className="remove-todo-button"
                     onClick={() => onRemovePressed(todo.text)}>
                     Remove
            </button>
            
        </div>

    </div>
)

export default TodoListItem;