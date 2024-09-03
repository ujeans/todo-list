import { useState } from "react";

import { toggleTodo } from "@/utils/todo";

import { Todo } from "@/types/todo";

export const useToggleTodo = (initialTodos: Todo[] = []) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleToggleTodo = (id: number) => {
    const todoToToggle = todos.find(todo => todo.id === id);

    if (!todoToToggle) return;

    toggleTodo(id, todoToToggle.isCompleted, updatedTodo => {
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === updatedTodo.id
            ? { ...todo, isCompleted: updatedTodo.isCompleted }
            : todo
        )
      );
    });
  };

  return {
    todos,
    setTodos,
    handleToggleTodo,
  };
};
