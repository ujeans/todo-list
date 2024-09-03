"use client";

import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useParams } from "next/navigation";

import Container from "@/components/shared/Container";
import Flex from "@/components/shared/Flex";

import ItemList from "@/components/detail/ItemList";
import UploadImg from "@/components/detail/UploadImg";
import Memo from "@/components/detail/Memo";
import Buttons from "@/components/detail/Buttons";

import { Todo } from "@/types/todo";

import { useToggleTodo } from "@/hooks/useToggleTodo";
import { toggleTodo } from "@/utils/todo";

export default function page() {
  const { itemId } = useParams();
  const [itemData, setItemData] = useState<Todo | null>(null);
  // const { todos, setTodos, handleToggleTodo } = useToggleTodo();

  useEffect(() => {
    if (itemId) {
      const fetchItem = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/ujin/items/${itemId}`
        );

        if (response.ok) {
          const data = await response.json();
          setItemData(data);
        }
      };

      fetchItem();
    }
  }, [itemId]);

  const handleToggleTodo = async (id: number) => {
    if (!itemData) return;

    toggleTodo(id, itemData.isCompleted, updatedTodo => {
      setItemData(prevData =>
        prevData ? { ...prevData, isCompleted: updatedTodo.isCompleted } : null
      );
    });
  };

  if (!itemData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container detail={true}>
        <ItemList itemData={itemData} onToggleTodo={handleToggleTodo} />

        <Flex css={infoStyles}>
          <UploadImg imageUrl={itemData.imageUrl} />
          <Memo memo={itemData.memo} />
        </Flex>

        <Buttons />
      </Container>
    </>
  );
}

const infoStyles = css`
  margin: 24px 0;

  @media (max-width: 744px) {
    flex-direction: column;
    gap: 24px;
  }

  @media (max-width: 375px) {
    margin: 16px 0;
    flex-direction: column;
    gap: 16px;
  }
`;
