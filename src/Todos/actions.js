export const CREATE_TODO = "CREATE_TODO"
// action creator
export const createTodo = text => ({
    type:CREATE_TODO,
    payload:{text}
});

export const REMOVE_TODO = 'REMOVE_TODO'
// action creator
export const removeTodo = text => ({
    type:REMOVE_TODO,
    payload:{text}
});

export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETED'
export const markAsCompleted = text => ({
    type:MARK_AS_COMPLETED,
    payload:{text}
})