import { createContext, useContext, useState } from "react";
import { Todo } from "../types/Todo";

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

export const useTodo = () => useContext(TodosContext);

export const TodosContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todoContextValue = {
    todos,
    addTodo,
    deleteTodo,
  };

  return (
    <TodosContext.Provider value={todoContextValue}>
      {children}
    </TodosContext.Provider>
  );
};
