export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

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