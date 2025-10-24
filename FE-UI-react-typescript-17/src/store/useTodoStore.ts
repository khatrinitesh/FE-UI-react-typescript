// src/store/useTodoStore.ts
import { create } from "zustand";
import {
  TODO_STATUS,
  type TodoStatus,
} from "../components/ToDolist/todoConstants";

export interface Todo {
  id: string;
  title: string;
  status: TodoStatus;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  clearCompleted: () => void;
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],

  addTodo: (title) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      status: TODO_STATUS.PENDING,
    };
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },

  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status:
                todo.status === TODO_STATUS.PENDING
                  ? TODO_STATUS.COMPLETED
                  : TODO_STATUS.PENDING,
            }
          : todo
      ),
    }));
  },

  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },

  clearCompleted: () => {
    set((state) => ({
      todos: state.todos.filter(
        (todo) => todo.status !== TODO_STATUS.COMPLETED
      ),
    }));
  },
}));
