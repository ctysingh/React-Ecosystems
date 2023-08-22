import { CREATE_TODO, MARK_AS_COMPLETED, REMOVE_TODO } from "./actions";

/* reducer function takes two paramter 
   1. state - represent current state array
   2. action - action object contains type & payload
 */

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
            const {text} = payload;
            return state.filter(todo => todo.text != text);            
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
        default:
            return state;

    }

}