"use client";
import { useEffect, useState } from "react";

import { css } from "@emotion/react";

import Container from "@/components/shared/Container";
import Flex from "@/components/shared/Flex";

import SearchBar from "@/components/home/SearchBar";
import TodoList from "@/components/home/TodoList";
import DoneList from "@/components/home/DoneList";

import { Todo } from "@/types/todo";

import { createTodo, getTodos, updateTodo } from "@/utils/item";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error("Failed to load todos", error);
      }
    };

    loadTodos();
  }, [setTodos]);

  const handleAddTodo = async (newTodo: string) => {
    if (!newTodo) return;

    try {
      const addedTodo = await createTodo(newTodo);
      setTodos(prevTodos => [...prevTodos, addedTodo]);
    } catch (error) {
      console.error("Failed to add todo", error);
    }
  };

  const handleToggleTodo = async (id: number) => {
    const todoToToggle = todos.find(todo => todo.id === id);
    if (!todoToToggle) return;

    try {
      const updatedTodo = await updateTodo(id.toString(), {
        isCompleted: !todoToToggle.isCompleted,
      });
      setTodos(prevTodos =>
        prevTodos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo))
      );
    } catch (error) {
      console.error("Failed to toggle todo", error);
    }
  };

  return (
    <>
      <Container detail={false}>
        <SearchBar onAddTodo={handleAddTodo} />

        <Flex justify="space-between" css={listStyles}>
          <TodoList
            todos={todos.filter(todo => !todo.isCompleted)}
            onToggleTodo={handleToggleTodo}
          />
          <DoneList
            todos={todos.filter(todo => todo.isCompleted)}
            onToggleTodo={handleToggleTodo}
          />
        </Flex>
      </Container>
    </>
  );
}

const listStyles = css`
  width: 100%;
  gap: 24px;

  @media (max-width: 744px) {
    flex-direction: column;
  }
`;
