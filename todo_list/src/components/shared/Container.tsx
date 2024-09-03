import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { colors } from "@/styles/colorPalette";

import Flex from "./Flex";

interface ContainerProps {
  children: React.ReactNode;
  detail?: boolean;
}

function Container({ children, detail = false }: ContainerProps) {
  return (
    <Flex direction="column" css={container(detail)}>
      <Wrapper detail={detail}>{children}</Wrapper>
    </Flex>
  );
}

const container = (detail: boolean) => css`
  max-width: 1200px;
  height: calc(100vh - 60px);
  margin: 0 auto;
  padding-top: 61px;
  background-color: ${detail ? colors.white : colors.gray50};
`;

const Wrapper = styled.div<{ detail: boolean }>`
  padding: ${props => (props.detail ? "0 102px" : "0px")};
  box-sizing: border-box;
  background-color: ${props => (props.detail ? colors.white : colors.gray50)};

  @media (max-width: 744px) {
    padding: 0 24px;
  }

  @media (max-width: 375px) {
    padding: 0 16px;
  }
`;

export default Container;
