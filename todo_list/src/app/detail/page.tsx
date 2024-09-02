"use client";

import { useState } from "react";
import { css } from "@emotion/react";

import Container from "@/components/shared/Container";
import Flex from "@/components/shared/Flex";

import ItemList from "@/components/detail/ItemList";
import UploadImg from "@/components/detail/UploadImg";
import Memo from "@/components/detail/Memo";
import Buttons from "@/components/detail/Buttons";

export default function page() {
  const [firstChecked, setFirstChecked] = useState(false);

  return (
    <>
      <Container detail={true}>
        <ItemList isChecked={firstChecked} />

        <Flex css={infoStyles}>
          <UploadImg />
          <Memo />
        </Flex>

        <Buttons />
      </Container>
    </>
  );
}

const infoStyles = css`
  margin: 24px 0;
`;
