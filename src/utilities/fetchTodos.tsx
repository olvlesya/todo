import { todo } from "../types/todo";

const todourl = "http://localhost:3001/todos";

export async function getTodos(): Promise<Array<todo>> {
  const response = await fetch(todourl);
  return response.json();
}

export async function createTodo(newTodo: Omit<todo, "id">): Promise<todo> {
  const response = await fetch(todourl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  return response.json();
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
