import React, { useState, useEffect } from "react";
import { v4 } from "uuid";

import Form from "./components/Form";
import Item from "./components/Item";
import { TodoProvider } from "./context/context";
import { Todo } from "./types/customTypes";
const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")!);
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))!;
  }, [todos]);
  const addTodo = (todo: Todo) => {
    setTodos((prev) => {
      return [{ ...todo, id: v4() }, ...prev];
    });
  };
  const updateTodo = (id: string | number, todo: Todo) => {
    setTodos((prev) => {
      return prev.map((pTodo) => {
        return pTodo.id == id ? todo : pTodo;
      });
    });
  };
  const deleteTodo = (id: string | number) => {
    setTodos((prev) => {
      return prev.filter((pTodo) => {
        return pTodo.id != id;
      });
    });
  };
  const toggleComplete = (id: string | number) => {
    setTodos((p) => {
      return p.map((pTodo) => {
        return pTodo.id == id
          ? { ...pTodo, completed: !pTodo.completed }
          : pTodo;
      });
    });
  };
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#433878] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4 ">
            <Form />
          </div>
          <div className="flex flex-wrap mt-5 gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <Item todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
