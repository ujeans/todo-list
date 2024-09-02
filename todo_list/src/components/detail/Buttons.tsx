import { css } from "@emotion/react";

import Flex from "../shared/Flex";
import ButtonComponent from "../shared/Button";

import CheckIcon from "@/assets/icons/check.svg";
import XIcon from "@/assets/icons/X.svg";

function Buttons() {
  return (
    <Flex justify="flex-end" css={buttonContainerStyle}>
      <ButtonComponent color="default" icon={<CheckIcon />}>
        수정 완료
      </ButtonComponent>
      <ButtonComponent color="delete" icon={<XIcon />}>
        삭제하기
      </ButtonComponent>
    </Flex>
  );
}

export default Buttons;

const buttonContainerStyle = css`
  gap: 16px;
`;
