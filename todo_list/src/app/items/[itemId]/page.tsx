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

import { useToggleTodo } from "@/hooks/useToggleTodo";

export default function page() {
  const [updatedItemName, setUpdatedItemName] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const router = useRouter();
  const { itemId } = useParams();

  const { todos, setTodos, handleToggleTodo } = useToggleTodo();

  const imageUrl = useSelector((state: RootState) => state.image.imageUrl);

  useEffect(() => {
    if (itemId) {
      const fetchItem = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/ujin/items/${itemId}`
        );

        if (response.ok) {
          const data = await response.json();
          setTodos([data]);
          setUpdatedItemName(data.name);
          setImage(data.imageUrl);
        }
      };

      fetchItem();
    }
  }, [itemId, setTodos]);

  const itemData = todos[0];

  if (!itemData) {
    return <div>Loading...</div>;
  }

  const handleSave = async () => {
    if (itemId && updatedItemName !== null && image !== null) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ujin/items/${itemId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: updatedItemName, imageUrl: imageUrl }),
        }
      );

      if (response.ok) {
        const updatedData = await response.json();
        setTodos([updatedData]); // 업데이트된 데이터로 상태 변경

        router.push("/");
      }
    }
  };

  return (
    <>
      <Container detail={true}>
        <ItemList
          itemData={itemData}
          onToggleTodo={handleToggleTodo}
          onNameUpdate={newName => setUpdatedItemName(newName)}
        />

        <Flex css={infoStyles}>
          <UploadImg imageUrl={image} onImageUpload={url => setImage(url)} />
          <Memo memo={itemData.memo} />
        </Flex>

        <Buttons onSave={handleSave} />
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
