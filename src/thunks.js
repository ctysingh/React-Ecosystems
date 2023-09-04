import { loadToDosProgress, loadToDosSuccess, loadToDosFailure } from "./Todos/actions";

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

export const displayAlert = (text) => () => {
    alert(text);
};