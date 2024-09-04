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
  // todos 상태를 관리하는 useState 훅. 초기 상태는 빈 배열.
  const [todos, setTodos] = useState<Todo[]>([]);

  // 컴포넌트가 마운트될 때, todos 데이터를 불러오는 useEffect 훅
  useEffect(() => {
    const loadTodos = async () => {
      try {
        // API를 통해 todos 데이터를 불러와 상태를 업데이트
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error("Failed to load todos", error);
      }
    };

    loadTodos();
  }, [setTodos]); // setTodos 의존성으로 인해 컴포넌트가 마운트될 때만 실행

  // 새로운 할 일을 추가하는 함수
  const handleAddTodo = async (newTodo: string) => {
    if (!newTodo) return;

    try {
      // API를 통해 새로운 할 일을 추가하고 상태를 업데이트
      const addedTodo = await createTodo(newTodo);
      setTodos(prevTodos => [...prevTodos, addedTodo]);
    } catch (error) {
      console.error("Failed to add todo", error);
    }
  };

  // 할 일의 완료 상태를 토글하는 함수
  const handleToggleTodo = async (id: number) => {
    const todoToToggle = todos.find(todo => todo.id === id);
    if (!todoToToggle) return;

    try {
      // API를 통해 할 일의 완료 상태를 업데이트하고 상태를 변경
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
        {/* 할 일을 입력할 수 있는 SearchBar 컴포넌트 */}
        <SearchBar onAddTodo={handleAddTodo} />

        {/* 할 일 목록과 완료된 목록을 표시하는 Flex 컴포넌트 */}
        <Flex justify="space-between" css={listStyles}>
          {/* 완료되지 않은 할 일을 표시하는 TodoList 컴포넌트 */}
          <TodoList
            todos={todos.filter(todo => !todo.isCompleted)}
            onToggleTodo={handleToggleTodo}
          />
          {/* 완료된 할 일을 표시하는 DoneList 컴포넌트 */}
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
