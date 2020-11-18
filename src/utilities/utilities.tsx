import { todo } from "../types/todo";

const todourl = "http://localhost:3001/todos";

export async function getTodos(): Promise<Array<todo>> {
  const response = await fetch(todourl);
  return response.json();
}

export function createTodo(newTodo: Omit<todo, "id">): Promise<todo> {
  return fetch(todourl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  }).then((response) => response.json());
}
