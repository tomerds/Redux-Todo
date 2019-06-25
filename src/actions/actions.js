export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (newTodo) => {
  return ({
    type: ADD_TODO,
    payload: newTodo
  })
}

export const toggleCompleted = (index) => {
  return ({
    type: TOGGLE_COMPLETED,
    payload: index
  })
}

export const deleteTodo = (index) => {
  return ({
    type: DELETE_TODO,
    payload: index,
  })
}