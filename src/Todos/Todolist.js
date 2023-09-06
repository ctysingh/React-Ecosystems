import React, {useEffect} from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import { loadToDos, removeTodoRequest, markAsCompletedRequest } from "../thunks";
import TodoListItem from "./TodoListItem";
import "./TodoList.css"

const TodoList = ({todos = [], onRemovePressed, onMarkCompleted,
     isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    },[]);

    const loadingMessage = <div>loading Todos...</div>;
    const content =  (
        <div className="list-wrapper">
            <NewTodoForm/>
            {todos.map(todo => <TodoListItem todo={todo} 
            onRemovePressed={onRemovePressed}
            onMarkCompleted={onMarkCompleted}/>)}
        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading:state.isLoading,
    todos:state.todos,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos:() => dispatch(loadToDos()),
    onRemovePressed: id =>dispatch(removeTodoRequest(id)),
    onMarkCompleted: id =>dispatch(markAsCompletedRequest(id)),    
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);