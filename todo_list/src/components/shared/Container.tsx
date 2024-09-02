import React from "react";
import { css } from "@emotion/react";

import { colors } from "@/styles/colorPalette";

import Flex from "./Flex";
import styled from "@emotion/styled";

interface ContainerProps {
  children: React.ReactNode;
  detail?: boolean;
}

function Container({ children, detail = false }: ContainerProps) {
  return (
    <Flex direction="column" css={container(detail)}>
      <Wrapper>{children}</Wrapper>
    </Flex>
  );
}

const container = (detail: boolean) => css`
  width: 1200px;
  height: calc(100vh - 60px);
  margin: 0 auto;
  padding-top: 61px;
  background-color: ${detail ? colors.gray50 : colors.white};
`;

const Wrapper = styled.div``;

export default Container;
