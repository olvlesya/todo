import { ThunkAction } from "redux-thunk";
import {
  getTodos,
  deleteTodo,
  updateTodo,
  createTodo,
} from "../utilities/utilities";
import {
  initTodo,
  initTodoType,
  todoRemove,
  todoComplete,
  todoCreate,
  todoUpdateText,
  todoRemoveType,
  todoCompleteType,
  todoUpdateTextType,
  todoCreateType,
} from "./actions";
import { stateType } from "../types/store";

export const loadTodos = (): ThunkAction<
  void,
  stateType,
  unknown,
  initTodoType
> => {
  return async (dispatch) => {
    const todos = await getTodos();
    dispatch(initTodo(todos));
  };
};

export const removeTodo = (
  id: number
): ThunkAction<void, stateType, unknown, todoRemoveType> => {
  return async (dispatch) => {
    await deleteTodo(id);
    dispatch(todoRemove(id));
  };
};

export const updateTodoState = (
  id: number,
  text: string,
  completed: boolean
): ThunkAction<void, stateType, unknown, todoCompleteType> => {
  return async (dispatch) => {
    await updateTodo({ id, text, completed });
    dispatch(todoComplete(id, completed));
  };
};

export const changeTodo = (
  id: number,
  text: string,
  completed: boolean
): ThunkAction<void, stateType, unknown, todoUpdateTextType> => {
  return async (dispatch) => {
    await updateTodo({ id, text, completed });
    dispatch(todoUpdateText(id, text));
  };
};

export const addTodo = (
  text: string
): ThunkAction<void, stateType, unknown, todoCreateType> => {
  return async (dispatch) => {
    const newTodo = await createTodo({ text, completed: false });
    dispatch(todoCreate(newTodo.id, newTodo.text));
  };
};
