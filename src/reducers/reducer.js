import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from '../actions/actions';

const initialState = {
  todoList: [
    {
      value: 'first to do',
      completed: false,
      id: 1
    },
    {
      value: 'second to do',
      completed: false,
      id: 2
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state, todoList: [...state.todoList.concat(action.payload)]
      }
    case TOGGLE_COMPLETED:
      state.todoList[action.payload].completed = !state.todoList[action.payload].completed;
      return state;
    case DELETE_TODO:
      return {
        ...state, todoList: [...state.todoList.splice(action.payload, 1)]
      }
    default:
      return state;
  }
}

