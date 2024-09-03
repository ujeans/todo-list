"use client";
import { useEffect, useState } from "react";

import { css } from "@emotion/react";

import Container from "@/components/shared/Container";
import Flex from "@/components/shared/Flex";

import SearchBar from "@/components/home/SearchBar";
import TodoList from "@/components/home/TodoList";
import DoneList from "@/components/home/DoneList";

import { useToggleTodo } from "@/hooks/useToggleTodo";

export default function Home() {
  const { todos, setTodos, handleToggleTodo } = useToggleTodo();

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

  return (
    <>
      <Container detail={false}>
        <SearchBar onAddTodo={addTodo} />

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
  gap: 24px;

  @media (max-width: 744px) {
    flex-direction: column;
  }
`;
