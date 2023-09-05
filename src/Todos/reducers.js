import { CREATE_TODO,
        MARK_AS_COMPLETED,
        REMOVE_TODO,
        LOAD_TODOS_PROGRESS,
        LOAD_TODOS_SUCCESS,
        LOAD_TODOS_FAILURE
 } from "./actions";

/* reducer function takes two paramter 
   1. state - represent current state array
   2. action - action object contains type & payload
 */

export const isLoading = (state = false, action) => {
    const {type} = action;
    switch(type){
        case LOAD_TODOS_PROGRESS:
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;            
    }
}

export const todos = (state=[], action) => {
    const {type, payload} = action;

    switch(type){
        case CREATE_TODO:{
            const {text}= payload;
            const newTodo = {
                 text: text,
                 isCompleted:false,
            };

            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const {todo: todoToRemove} = payload;
            return state.filter(todo => todo.id != todoToRemove.id);            
        }

        case MARK_AS_COMPLETED:{
            const {text} = payload;           
             return state.map(todo => {
                if(todo.text === text ) {
                     return {...todo, isCompleted:true };
                }
                return state
             });
        }

        case LOAD_TODOS_SUCCESS:{
            const {todos} = payload;
            return todos;
        }
        case LOAD_TODOS_PROGRESS:
        case LOAD_TODOS_FAILURE:    
        default:
            return state;

    }

}