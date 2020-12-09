import { todo } from "../types/todo";
import {
  todoCreateType,
  todoRemoveType,
  todoCompleteType,
  initTodoType,
  todoUpdateTextType,
} from "./actions";

export const todosReducer = (
  state: Array<todo> = [],
  action:
    | todoCreateType
    | todoRemoveType
    | todoCompleteType
    | initTodoType
    | todoUpdateTextType
) => {
  switch (action.type) {
    case "todo/add": {
      return state.concat(action.payload);
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
    case "todo/init": {
      return action.payload;
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
