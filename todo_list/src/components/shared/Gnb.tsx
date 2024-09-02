import { css } from "@emotion/react";
import { colors } from "@/styles/colorPalette";

import Flex from "./Flex";

import LargeImage from "@/assets/images/large.svg";

function Gnb() {
  return (
    <Flex align="center" css={container}>
      <Flex align="center" css={wrapper}>
        <LargeImage />
      </Flex>
    </Flex>
  );
}

const container = css`
  width: 100vw;
  height: 60px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.slate200};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const wrapper = css`
  margin: 0 auto;
  width: 1200px;
  height: 100%;
`;

export default Gnb;
