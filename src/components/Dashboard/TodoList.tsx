import React from "react";
import { useTodos } from "../../contexts/TodosContext";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo: any) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
