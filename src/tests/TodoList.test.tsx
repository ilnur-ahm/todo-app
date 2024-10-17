import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList/TodoList";
import { Todo } from "../types";

test("renders todo list with items", () => {
  const todos: Todo[] = [
    { id: 1, text: "Test todo 1", completed: false },
    { id: 2, text: "Test todo 2", completed: true },
  ];
  render(<TodoList todos={todos} onToggle={() => {}} />);
  expect(screen.getByText("Test todo 1")).toBeInTheDocument();
  expect(screen.getByText("Test todo 2")).toBeInTheDocument();
});

test("renders empty todo list", () => {
  render(<TodoList todos={[]} onToggle={() => {}} />);
  expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
});
