import React, {useEffect} from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import { loadToDos } from "../thunks";
import TodoListItem from "./TodoListItem";
import { removeTodo, markAsCompleted } from "./actions";
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
    onRemovePressed: text =>dispatch(removeTodo(text)),
    onMarkCompleted: text =>dispatch(markAsCompleted(text)),    
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);