"use client";
import { useEffect, useState } from "react";

import { css } from "@emotion/react";

import Container from "@/components/shared/Container";
import Flex from "@/components/shared/Flex";

import SearchBar from "@/components/home/SearchBar";
import TodoList from "@/components/home/TodoList";
import DoneList from "@/components/home/DoneList";

interface Todo {
  id: number;
  tenantId: string;
  name: string;
  memo: string | null;
  imageUrl: string | null;
  isCompleted: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // todos 데이터를 서버에서 불러오는 함수
  const fetchTodos = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/ujin/items`
    );
    if (response.ok) {
      const data = await response.json();
      // todos 상태를 서버에서 불러온 데이터로 설정
      setTodos(data);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 todos 데이터를 불러옴
    fetchTodos();
  }, []);

  const addTodo = async (newTodo: string) => {
    if (!newTodo) return;

    // Post 요청 보내기
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/ujin/items`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newTodo }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      // TodoList에 새로운 항목 추가
      setTodos(prevTodos => [...prevTodos, data]);
    }
  };

  const toggleTodo = async (id: number) => {
    const todoToToggle = todos.find(todo => todo.id === id);

    if (!todoToToggle) return;

    const updatedIsCompleted = !todoToToggle.isCompleted;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/ujin/items/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCompleted: updatedIsCompleted }),
      }
    );

    if (response.ok) {
      // 상태 업데이트
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? { ...todo, isCompleted: updatedIsCompleted } : todo
        )
      );
    } else {
      console.error("Failed to update todo");
    }
  };

  return (
    <>
      <Container detail={false}>
        <SearchBar onAddTodo={addTodo} />

        <Flex justify="space-between" css={listStyles}>
          <TodoList
            todos={todos.filter(todo => !todo.isCompleted)}
            onToggleTodo={toggleTodo}
          />
          <DoneList
            todos={todos.filter(todo => todo.isCompleted)}
            onToggleTodo={toggleTodo}
          />
        </Flex>
      </Container>
    </>
  );
}

const listStyles = css`
  gap: 24px;

  @media (max-width: 744px) {
    flex-direction: column;
  }
`;
