export const todos = (state=[], action) => {
    const {type, payload} = action;

    switch(type){
        case CREATE_TOD:{
            const {text}= payload;
            const newToDo = {
                 text: text,
                 isCompleted:false
            };

            return state.concat(newToDo);
        }
        case REMOVE_TODO: {
            const {text} = payload;
            return state.filter(todo => todo.text != text);            
        }
        default:
            return state

    }

}