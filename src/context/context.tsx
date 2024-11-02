import { useContext, createContext } from "react";
import { ContextType } from "../types/customTypes";

const defaultContext: ContextType = {
  todos: [
    {
      id: 1,
      todo: "Sample Todo",
      completed: false,
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
};

const Context = createContext<ContextType>(defaultContext);

export const useTodo = () => {
  return useContext(Context);
};

export const TodoProvider = Context.Provider;
