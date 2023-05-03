import React, { useState } from "react";
import { useTodos } from "../../contexts/TodosContext";

export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.trim()) {
      addTodo({
        id: Date.now().toString(),
        title: title,
        completed: false,
        subtasks: [],
      });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
