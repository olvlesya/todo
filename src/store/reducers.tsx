import { todo } from "../types/todo";
import {
  todoCreateType,
  todoRemoveType,
  todoCompleteType,
  todoUpdateTextType,
} from "./actions";

export const todosReducer = (
  state: Array<todo> = [],
  action:
    | todoCreateType
    | todoRemoveType
    | todoCompleteType
    | todoUpdateTextType
) => {
  switch (action.type) {
    case "todo/add": {
      const lastId = state[state.length - 1]?.id ?? 1;
      return state.concat({ ...action.payload, id: lastId });
    }
    case "todo/delete": {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case "todo/complete": {
      const findTodo: todo = state.find(
        (todo) => todo.id === action.payload.id
      )!;
      return state
        .filter((todo) => todo.id !== action.payload.id)
        .concat({
          ...findTodo,
          completed: action.payload.completed,
        });
    }
    case "todo/updateText": {
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo;
      });
    }
    default:
      return state;
  }
};
