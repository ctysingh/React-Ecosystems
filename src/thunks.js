import { loadToDosProgress, loadToDosSuccess, loadToDosFailure } from "./Todos/actions";

export const loadToDos = () => async (dispatch, getState) => {
    try {
        dispatch(loadToDosProgress);
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
        dispatch(loadToDosSuccess(todos));
    } catch(e){
        dispatch(loadToDosFailure);
        dispatch(displayAlert(e));
    }   

}

export const displayAlert = (text) => () => {
    alert(text);
};