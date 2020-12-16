import { todo } from "../types/todo";

const todosKey = "todos";

export function getTodos() {
  return JSON.parse(localStorage.getItem(todosKey) ?? "[]") as todo[];
}

export function createTodo(newTodo: Omit<todo, "id">): todo {
  const allTodos = getTodos();
  const lastTodo = allTodos[allTodos.length - 1];
  const newId = typeof lastTodo === "undefined" ? 1 : lastTodo.id + 1;
  const createdTodo = { ...newTodo, id: newId };
  allTodos.push(createdTodo);
  localStorage.setItem(todosKey, JSON.stringify(allTodos));
  return createdTodo;
}

export async function deleteTodo(id: number) {
  const response = await fetch(`${todourl}/${id}`, {
    method: "DELETE",
  });
  return response.json();
}

export async function updateTodo(updatedTodo: todo) {
  const response = await fetch(`${todourl}/${updatedTodo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  });
  return response.json();
}
