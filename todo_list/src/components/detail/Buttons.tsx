import { css } from "@emotion/react";

import Flex from "../shared/Flex";
import ButtonComponent from "../shared/Button";

import CheckIcon from "@/assets/icons/check.svg";
import XIcon from "@/assets/icons/X.svg";

interface ButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
  image: string | null;
  memo: string;
}

function Buttons({ onEdit, onDelete, image, memo }: ButtonsProps) {
  const isEditable = !!image || !!memo;

  return (
    <Flex justify="flex-end" css={buttonContainerStyle}>
      <ButtonComponent
        color={isEditable ? "edit" : "default"}
        icon={<CheckIcon />}
        onClick={onEdit}
      >
        수정 완료
      </ButtonComponent>
      <ButtonComponent color="delete" icon={<XIcon />} onClick={onDelete}>
        삭제하기
      </ButtonComponent>
    </Flex>
  );
}

export default Buttons;

const buttonContainerStyle = css`
  gap: 16px;

  @media (max-width: 744px) {
    justify-content: center;
  }
`;
