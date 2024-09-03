"use client";

import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import Container from "@/components/shared/Container";
import Flex from "@/components/shared/Flex";

import ItemList from "@/components/detail/ItemList";
import UploadImg from "@/components/detail/UploadImg";
import Memo from "@/components/detail/Memo";
import Buttons from "@/components/detail/Buttons";

import { Todo } from "@/types/todo";

import { deleteTodo, getTodoById, updateTodo } from "@/utils/item";
import { useToggleTodo } from "@/hooks/useToggleTodo";

export default function page() {
  const [updatedName, setUpdatedName] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [currentMemo, setCurrentMemo] = useState<string>("");

  const router = useRouter();
  const { itemId } = useParams();
  const id = Array.isArray(itemId) ? itemId[0] : itemId;

  const { todos, setTodos } = useToggleTodo();

  const imageUrl = useSelector((state: RootState) => state.image.imageUrl);

  useEffect(() => {
    if (!itemId) return;

    const fetchItem = async () => {
      try {
        const data = await getTodoById(id);
        setTodos([data]);
        setUpdatedName(data.name);
        setImage(data.imageUrl); // imageUrl을 상태로 설정
        setCurrentMemo(data.memo || ""); // memo가 없으면 빈 문자열로 설정
      } catch (error) {
        console.error("Failed to fetch todo", error);
      }
    };

    fetchItem();
  }, [itemId, setTodos]);

  const handleEdit = async () => {
    if (itemId && updatedName !== null) {
      const updates: Partial<Todo> = {
        name: updatedName,
      };

      // imageUrl이 존재하는 경우에만 추가
      if (imageUrl) {
        updates.imageUrl = imageUrl;
      }

      // memo가 존재하는 경우에만 추가
      if (currentMemo) {
        updates.memo = currentMemo;
      }

      try {
        const updatedData = await updateTodo(id, updates);
        setTodos([updatedData]);
        router.push("/");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleDelete = async () => {
    if (!itemId) return;

    try {
      await deleteTodo(id);
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const itemData = todos[0];

  if (!itemData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container detail={true}>
        <ItemList
          itemData={itemData}
          onNameUpdate={newName => setUpdatedName(newName)}
        />

        <Flex css={infoStyles}>
          <UploadImg imageUrl={image} onImageUpload={url => setImage(url)} />
          <Memo
            currentMemo={currentMemo}
            onMemoChange={newMemo => setCurrentMemo(newMemo)}
          />
        </Flex>

        <Buttons onEdit={handleEdit} onDelete={handleDelete} />
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
