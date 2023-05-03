import React from "react";
import { Todo as TodoType } from "./Todo";

type Props = {
  todo: TodoType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className="todo">
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;
