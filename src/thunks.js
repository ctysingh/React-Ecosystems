import { 
        loadTodosProgress, 
        loadTodosSuccess, 
        loadTodosFailure,
        removeTodo, 
        createTodo,
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
export const addTodoRequest = text => async dispatch => {
    try {
        const body = JSON.stringify({text});
        const response = await fetch('http://localhost:8080/todos/',{
            headers:{
                'Content-Type':'application/json',
            },
            method:'post',
            body
        });
        const todo = await response.json();
        dispatch(createTodo(todo));
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

export const markAsCompletedRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'post',            
        });
        const markTodo = await response.json();
        dispatch(markAsCompleted(markTodo));

    } catch(e) {
        dispatch(displayAlert(e));
    }

}

export const displayAlert = (text) => () => {
    alert(text);
};