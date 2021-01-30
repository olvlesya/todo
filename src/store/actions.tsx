import { todo } from "../types/todo";

export type todoCreateType = {
  type: "todo/add";
  payload: Omit<todo, "id">;
};
export const todoCreate = (value: string): todoCreateType => ({
  type: "todo/add",
  payload: {
    text: value,
    completed: false,
  },
});

export type todoRemoveType = {
  type: "todo/delete";
  payload: number;
};
export const todoRemove = (id: number): todoRemoveType => ({
  type: "todo/delete",
  payload: id,
});

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
): todoCompleteType => ({
  type: "todo/complete",
  payload: { id, completed },
});

export type todoUpdateTextType = {
  type: "todo/updateText";
  payload: {
    id: number;
    text: string;
  };
};
export const todoUpdateText = (
  id: number,
  text: string
): todoUpdateTextType => ({
  type: "todo/updateText",
  payload: { id, text },
});
