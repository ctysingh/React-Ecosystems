import { 
        loadTodosProgress, 
        loadTodosSuccess, 
        loadTodosFailure,
        removeTodo 
    } from "./Todos/actions";

export const loadToDos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosProgress());
        const response = await fetch('http://localhost:8080/todos-delay');
        const todos = await response.json();
        dispatch(loadTodosSuccess(todos));
    } catch(e){
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }   

}

// TBD
export const addTodoRequest = () => async dispatch => {
    try {

    }catch(e) {
        dispatch(displayAlert(e));
    }
}

export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method:'delete'
        });

        const removedTodo = await response.json(); 

        dispatch(removeTodo(removedTodo));

    }catch(e){
        dispatch(displayAlert(e));
    }
}


export const displayAlert = (text) => () => {
    alert(text);
};