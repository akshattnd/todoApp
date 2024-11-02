export interface Todo {
    id: string | number;
    todo: string;
    completed: boolean;
}
export interface ContextType {
    todos: Todo[];
    addTodo?: (todo: Todo) => void;
    updateTodo?: (id: string | number, todo: Todo) => void;
    deleteTodo?: (id: string | number) => void;
    toggleComplete?: (id: string | number) => void;
}
