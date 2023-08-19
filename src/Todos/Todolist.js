import React from "react";
import { Connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css"

const TodoList = ({todos = [], onRemovePressed}) => (
    <div className="list-wrapper">
        <NewTodoForm></NewTodoForm>
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}/>)}
    </div>
)

const mapStateToProps = state => ({
    todos:state.todos,
});
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text =>dispatch(removeToDo(text)),    
});

export default Connect(mapStateToProps, mapDispatchToProps)(TodoList);