import { todo } from "../types/todo";

export type todoCreateType = {
  type: "todo/add";
  payload: todo;
};
export const todoCreate = (id: number, value: string): todoCreateType => {
  return {
    type: "todo/add",
    payload: {
      id,
      text: value,
      completed: false,
    },
  };
};

export type todoRemoveType = {
  type: "todo/delete";
  payload: number;
};
export const todoRemove = (id: number): todoRemoveType => {
  return {
    type: "todo/delete",
    payload: id,
  };
};

export type todoCompleteType = {
  type: "todo/complete";
  payload: {
    id: number;
    completed: boolean;
  };
};
export const todoComplete = (
  id: number,
  completed: boolean
): todoCompleteType => {
  return {
    type: "todo/complete",
    payload: {
      id,
      completed,
    },
  };
};

export type initTodoType = {
  type: "todo/init";
  payload: Array<todo>;
};
export const initTodo = (todos: Array<todo>): initTodoType => {
  return {
    type: "todo/init",
    payload: todos,
  };
};
