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

const intialTodos = { isLoading:false, data:[]};

export const todos = (state=intialTodos, action) => {
    const {type, payload} = action;

    switch(type){
        case CREATE_TODO:{
            const {todo}= payload;     
            return {
                ...state,
                data: state.data.concat(todo)
            };
        }
        case REMOVE_TODO: {
            const {todo: todoToRemove} = payload;
            return {
                ...state,
                data:state.data.filter(todo => todo.id != todoToRemove.id),
            };              
        }

        case MARK_AS_COMPLETED:{
            const {todo: todoAsCompleted} = payload;           
             return {
                ...state,
                data:state.data.map(todo => {
                    if(todo.id === todoAsCompleted.id ) {
                        return todoAsCompleted;
                    }
                }),
             } ;           
        }

        case LOAD_TODOS_SUCCESS:{
            const {todos} = payload;
            return {
                ...state,
                isLoading:false,
                data:todos,
            };
        }
        case LOAD_TODOS_PROGRESS:
            return {
                ...state,
                isLoading:true,                
            };
        case LOAD_TODOS_FAILURE: 
        return {
            ...state,
            isLoading:false,                
        }; 
        default:
            return state;

    }

}