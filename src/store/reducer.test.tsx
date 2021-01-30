import { todosReducer } from "./reducers";
import {
  todoCreate,
  todoRemove,
  todoComplete,
  todoUpdateText,
} from "./actions";

const generateTodo = (id: number, completed = false, text = `Todo ${id}`) => ({
  id,
  text,
  completed,
});
const generateTodos = (length: number) =>
  [...Array(length)].map((_c, ind) => generateTodo(ind));

describe("reducer", () => {
  test("todoCreate", () => {
    expect(todosReducer([], todoCreate(1, "test"))).toEqual([
      { id: 1, text: "test", completed: false },
    ]);
  });

  test("todoRemove", () => {
    const todos = generateTodos(2);
    const idToRemove = 2;
    expect(todosReducer(todos, todoRemove(idToRemove))).toEqual(
      todos.filter((todo) => todo.id !== idToRemove)
    );
  });

  test("todoComplete", () => {
    const todos = generateTodos(2);
    expect(todosReducer(todos, todoComplete(0, true))).toEqual([
      generateTodo(1),
      generateTodo(0, true),
    ]);
  });

  test("todoUpdateText", () => {
    const todos = generateTodos(2);
    const idToUpdate = 1;
    const newText = "Test";
    expect(todosReducer(todos, todoUpdateText(idToUpdate, newText))).toEqual(
      todos.map((todo) =>
        todo.id === idToUpdate ? { ...todo, text: newText } : todo
      )
    );
  });
});
