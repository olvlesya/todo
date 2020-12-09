import { todo } from "../types/todo";
import {
  todoCreateType,
  todoRemoveType,
  todoCompleteType,
  initTodoType,
} from "./actions";

export const todosReducer = (
  state: Array<todo> = [],
  action: todoCreateType | todoRemoveType | todoCompleteType | initTodoType
) => {
  switch (action.type) {
    case "todo/add": {
      return state.concat(action.payload);
    }
    case "todo/delete": {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case "todo/complete": {
      const updTodo = state.find((todo) => todo.id === action.payload.id);
      updTodo!.completed = action.payload.completed;
      return state
        .filter((todo) => todo.id !== action.payload.id)
        .concat(updTodo!);
    }
    case "todo/init": {
      return action.payload;
    }
    default:
      return state;
  }
};
