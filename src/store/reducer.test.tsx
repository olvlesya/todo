import { todosReducer } from "./reducers";
import {
  todoCreate,
  todoRemove,
  todoComplete,
  initTodo,
  todoUpdateText,
} from "./actions";

const generateTodo = (id: number) => ({
  id,
  text: `Todo ${id}`,
  completed: false,
});
const generateTodos = (length: number) =>
  Array.from({ length }, (_c, ind) => generateTodo(ind));

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
    expect(
      todosReducer(
        [
          { id: 1, text: "test", completed: false },
          { id: 2, text: "test", completed: false },
        ],
        todoComplete(1, true)
      )
    ).toEqual([
      { id: 2, text: "test", completed: false },
      { id: 1, text: "test", completed: true },
    ]);
  });

  test("initTodo", () => {
    const todos = generateTodos(3);
    expect(todosReducer([], initTodo(todos))).toEqual(todos);
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
