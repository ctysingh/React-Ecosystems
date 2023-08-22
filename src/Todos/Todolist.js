import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { removeTodo, markAsCompleted } from "./actions";
import "./TodoList.css"

const TodoList = ({todos = [], onRemovePressed, onMarkCompleted}) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItem todo={todo} 
        onRemovePressed={onRemovePressed}
        onMarkCompleted={onMarkCompleted}/>)}
    </div>
)

const mapStateToProps = state => ({
    todos:state.todos,
});
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text =>dispatch(removeTodo(text)),
    onMarkCompleted: text =>dispatch(markAsCompleted(text)),    
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);