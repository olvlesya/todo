import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoContainer } from "./Todo";

describe("Todo", () => {
  test("Content visible", () => {
    const id = 1;
    const text = "Test";
    const completed = false;

    const container = render(
      <TodoContainer
        id={id}
        text={text}
        completed={completed}
        updateTodoState={() => {}}
        removeTodoById={() => {}}
        updateTodoText={() => {}}
      />
    );
    expect(container.getByText(text)).toBeInTheDocument();
    expect(
      (container.getByTestId(`todo-checkbox-${id}`) as HTMLInputElement).checked
    ).toBe(completed);
  });

  test("Todo completed callback", () => {
    const todoId = 1;
    const todoText = "Test";
    const todoCompleted = false;
    const todoCompleteMock = jest.fn();

    const container = render(
      <TodoContainer
        id={todoId}
        text={todoText}
        completed={todoCompleted}
        updateTodoState={todoCompleteMock}
        removeTodoById={() => {}}
        updateTodoText={() => {}}
      />
    );

    const checkbox = container.getByTestId(
      `todo-checkbox-${todoId}`
    ) as HTMLInputElement;

    fireEvent.click(checkbox);

    expect(todoCompleteMock).toBeCalledTimes(1);
    expect(todoCompleteMock.mock.calls[0][1]).toBe(!todoCompleted);
  });

  test("Todo remove callback", () => {
    const todoId = 1;
    const todoText = "Test";
    const todoCompleted = false;
    const todoRemoveMock = jest.fn();

    const container = render(
      <TodoContainer
        id={todoId}
        text={todoText}
        completed={todoCompleted}
        updateTodoState={() => {}}
        removeTodoById={todoRemoveMock}
        updateTodoText={() => {}}
      />
    );

    const removeButton = container.getAllByRole("button")[1];
    fireEvent.click(removeButton);

    expect(todoRemoveMock).toBeCalledTimes(1);
    expect(todoRemoveMock.mock.calls[0][0]).toBe(todoId);
  });

  test("Todo edit", () => {
    const todoId = 1;
    const todoText = "Test";
    const todoCompleted = false;
    const todoEditMock = jest.fn();

    const container = render(
      <TodoContainer
        id={todoId}
        text={todoText}
        completed={todoCompleted}
        updateTodoState={() => {}}
        removeTodoById={() => {}}
        updateTodoText={todoEditMock}
      />
    );

    const editButton = container.getAllByRole("button")[0];
    fireEvent.click(editButton);

    expect(container.queryByText(todoText)).not.toBeInTheDocument();

    const input = container.getByTestId(`todo-input-${todoId}`);
    expect(input).toBeInTheDocument();
  });
});
