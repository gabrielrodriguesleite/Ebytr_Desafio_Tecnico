import {
  TODO_ADD, TODO_DEL, TODO_EDT, TODO_UPD,
} from '../actions/todo';

export const TODO_INITIAL_STATE = [];

export const todos = (state = TODO_INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case TODO_ADD: return [...state, { ...action.todo, id: state.length }];
    case TODO_DEL: return state.filter((i) => i.id !== action.todo.id);
    case TODO_UPD: return state.map((i) => (i.id === action.todo.id ? action.todo : i));
    case TODO_EDT: return state.map((i) => (i.id === action.todo.id ? { ...i, edit: true } : i));
    default: return state;
  }
};
