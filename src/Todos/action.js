export const CREATE_TODO = "CREATE_TODO"
const create_todo = text => ({
    type:CREATE_TODO,
    payload:text
});

export const REMOVE_TODO = 'REMOVE_TODO'
const remove_todo = text => ({
    type:REMOVE_TODO,
    payload:text
});