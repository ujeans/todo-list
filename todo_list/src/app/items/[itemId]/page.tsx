"use client";

import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useParams, useRouter } from "next/navigation";

import Container from "@/components/shared/Container";
import Flex from "@/components/shared/Flex";

import ItemList from "@/components/detail/ItemList";
import UploadImg from "@/components/detail/UploadImg";
import Memo from "@/components/detail/Memo";
import Buttons from "@/components/detail/Buttons";

import { Todo } from "@/types/todo";

import { deleteTodo, getTodoById, updateTodo } from "@/utils/item";

export default function page() {
  const [todos, setTodos] = useState<Todo[]>([]); // 할 일 목록 상태 관리
  const [updatedName, setUpdatedName] = useState<string | null>(null); // 할 일 이름 상태 관리
  const [image, setImage] = useState<string | null>(null); // 이미지 URL 상태 관리
  const [currentMemo, setCurrentMemo] = useState<string>(""); // 메모 상태 관리

  const router = useRouter();
  const { itemId } = useParams(); // URL에서 itemId를 가져옴
  const id = Array.isArray(itemId) ? itemId[0] : itemId; // itemId가 배열일 경우 첫 번째 요소를 사용

  useEffect(() => {
    if (!itemId) return; // itemId가 없으면 아무 작업도 하지 않음

    const fetchItem = async () => {
      try {
        const data = await getTodoById(id); // 서버에서 할 일 데이터를 가져옴
        setTodos([data]); // 할 일 상태 업데이트
        setUpdatedName(data.name); // 할 일 이름 상태 설정
        setImage(data.imageUrl); // imageUrl을 상태로 설정
        setCurrentMemo(data.memo || ""); // memo가 없으면 빈 문자열로 설정
      } catch (error) {
        console.error("Failed to fetch todo", error);
      }
    };

    fetchItem(); // 컴포넌트가 마운트될 때 할 일 데이터를 가져옴
  }, [itemId, setTodos]); // itemId가 변경될 때마다 실행

  // 할 일을 수정하는 함수
  const handleEdit = async () => {
    if (itemId && updatedName !== null) {
      const updates: Partial<Todo> = {
        name: updatedName, // 업데이트할 할 일 이름
      };

      // 이미지가 존재하고 기존 이미지와 다를 경우에ㅋ만 업데이트
      if (image && image !== todos[0]?.imageUrl) {
        updates.imageUrl = image;
      }

      // memo가 존재하는 경우에만 추가
      if (currentMemo) {
        updates.memo = currentMemo;
      }

      try {
        // 서버에 업데이트 요청
        const updatedData = await updateTodo(id, updates);
        setTodos([updatedData]); // 업데이트된 할 일 상태로 설정
        router.push("/"); // 메인 페이지로 리다이렉션
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  // 할 일을 삭제하는 함수
  const handleDelete = async () => {
    if (!itemId) return;

    try {
      await deleteTodo(id); // 서버에서 할 일을 삭제
      router.push("/"); // 메인 페이지로 리다이렉션
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const itemData = todos[0]; // 첫 번째 할 일 데이터 가져오기

  if (!itemData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container detail={true}>
        {/* 할 일 목록을 표시하는 ItemList 컴포넌트 */}
        <ItemList
          itemData={itemData}
          onNameUpdate={newName => setUpdatedName(newName)}
        />

        <Flex css={infoStyles}>
          {/* 이미지 업로드 및 표시를 위한 UploadImg 컴포넌트 */}
          <UploadImg imageUrl={image} onImageUpload={url => setImage(url)} />
          {/* 메모 입력을 위한 Memo 컴포넌트 */}
          <Memo
            currentMemo={currentMemo}
            onMemoChange={newMemo => setCurrentMemo(newMemo)}
          />
        </Flex>

        {/* 수정 및 삭제 버튼을 포함하는 Buttons 컴포넌트 */}
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
