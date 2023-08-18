import { CREATE_TODO, REMOVE_TODO } from "./action";

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
        default:
            return state;

    }

}