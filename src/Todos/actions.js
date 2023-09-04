export const CREATE_TODO = "CREATE_TODO";
// action creator
export const createTodo = text => ({
    type:CREATE_TODO,
    payload:{text}
});

export const REMOVE_TODO = 'REMOVE_TODO';
// action creator
export const removeTodo = text => ({
    type:REMOVE_TODO,
    payload:{text}
});

export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETED';
export const markAsCompleted = text => ({
    type:MARK_AS_COMPLETED,
    payload:{text}
})

export const LOAD_TO_DOS_PROGRESS = 'LOAD_TO_DOS_PROGRESS';
export const loadToDosProgress = () => ({
    type:LOAD_TO_DOS_PROGRESS,
});

export const LOAD_TO_DOS_SUCCESS = 'LOAD_TOD_DOS_SUCCESS';
export const loadToDosSuccess = (todos) => ({
    type: LOAD_TO_DOS_SUCCESS,
    payload:{todos},
});

export const LOAD_TOD_DOS_FAILURE = 'LOAD_TO_DODS_FAILURE';
export const loadToDosFailure = () => ({
    type:LOAD_TOD_DOS_FAILURE,
    
});
