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

import { useToggleTodo } from "@/hooks/useToggleTodo";

export default function page() {
  const [updatedName, setUpdatedName] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [currentMemo, setCurrentMemo] = useState<string>("");

  const router = useRouter();
  const { itemId } = useParams();

  const { todos, setTodos, handleToggleTodo } = useToggleTodo();

  const imageUrl = useSelector((state: RootState) => state.image.imageUrl);

  useEffect(() => {
    if (!itemId) return;

    const fetchItem = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ujin/items/${itemId}`
      );

      if (response.ok) {
        const data = await response.json();
        setTodos([data]);
        setUpdatedName(data.name);
        setImage(data.imageUrl); // imageUrl을 상태로 설정
        setCurrentMemo(data.memo || ""); // memo가 없으면 빈 문자열로 설정
      }
    };

    fetchItem();
  }, [itemId, setTodos]);

  const itemData = todos[0];

  if (!itemData) {
    return <div>Loading...</div>;
  }
  const handleEdit = async () => {
    if (itemId && updatedName !== null) {
      const requestBody: Partial<Todo> = {
        name: updatedName,
      };

      // imageUrl이 존재하는 경우에만 추가
      if (imageUrl) {
        requestBody.imageUrl = imageUrl;
      }

      // memo가 존재하는 경우에만 추가
      if (currentMemo) {
        requestBody.memo = currentMemo;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ujin/items/${itemId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const updatedData = await response.json();
        setTodos([updatedData]); // 업데이트된 데이터로 상태 변경

        router.push("/");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData); // 오류 메시지 출력
      }
    }
  };

  const handleDelete = async () => {
    if (!itemId) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/ujin/items/${itemId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      router.push("/");
    } else {
      const errorData = await response.json();
      console.log("Error:", errorData);
    }
  };

  return (
    <>
      <Container detail={true}>
        <ItemList
          itemData={itemData}
          onToggleTodo={handleToggleTodo}
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
