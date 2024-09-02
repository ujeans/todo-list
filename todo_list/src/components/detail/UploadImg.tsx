import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { colors } from "@/styles/colorPalette";

import Flex from "../shared/Flex";
import CircularButtonComponent from "../shared/CircularButton";

import Img from "@/assets/images/img.svg";
import AddIcon from "@/assets/icons/add.svg";

function UploadImg() {
  return (
    <Flex align="center" justify="center" css={add}>
      <Img />
      <CircularButton styleType="plus">
        <AddIcon />
      </CircularButton>
    </Flex>
  );
}

const add = css`
  position: relative;
  width: 384px;
  height: 311px;
  margin-right: 24px;
  background-color: ${colors.gray50};
  border: 1px dashed ${colors.slate300};
  border-radius: 24px;

  @media (max-width: 744px) {
    width: 100%;
  }
`;

const CircularButton = styled(CircularButtonComponent)`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export default UploadImg;
