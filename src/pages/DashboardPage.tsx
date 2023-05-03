import React, { useContext } from "react";
import { useTodo } from "../contexts/TodosContext";
import { useAuth } from "../contexts/AuthContext";
import { TodoList } from "../components/Dashboard/TodoList";
import { TodoForm } from "../components/Dashboard/TodoForm";

export function DashboardPage() {
  const { todos, addTodo } = useTodo();
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <div>
      <h2>Welcome {user?.name}!</h2>
      <button onClick={handleLogout}>Logout</button>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
