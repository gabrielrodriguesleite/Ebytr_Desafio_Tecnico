export const TODO_ADD = 'TODO_ADD';
export const TODO_DEL = 'TODO_DEL';
export const TODO_EDT = 'TODO_EDT';
export const TODO_UPD = 'TODO_UPD';

export const todoAdd = (todo) => ({
  type: TODO_ADD,
  todo,
});

export const todoDel = (todo) => ({
  type: TODO_DEL,
  todo,
});

export const todoEdt = (todo) => ({
  type: TODO_EDT,
  todo,
});

export const todoUpd = (todo) => ({
  type: TODO_UPD,
  todo,
});
