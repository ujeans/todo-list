import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@/styles/colorPalette";

import Flex from "./Flex";
import Text from "./Text";

import Checkbox from "@/assets/icons/checkbox.svg";
import Checkedbox from "@/assets/icons/checkedbox.svg";

interface CheckListProps {
  text: string;
  isChecked?: boolean;
  detail?: boolean;
  onClick?: () => void;
}

function CheckList({
  text,
  isChecked = false,
  detail = false,
  onClick,
}: CheckListProps) {
  const handleToggle = () => {
    if (onClick) onClick();
  };

  return (
    <Flex
      as="li"
      align="center"
      justify={detail ? "center" : "flex-start"}
      css={listRowContainerStyles(isChecked, detail)}
    >
      <Flex css={iconStyles} onClick={handleToggle}>
        {isChecked ? <Checkedbox /> : <Checkbox />}
      </Flex>
      <StyledText
        typography={detail ? "t1" : "t5"}
        color={detail ? "slate900" : "slate800"}
        isChecked={isChecked}
        detail={detail}
      >
        {text}
      </StyledText>
    </Flex>
  );
}

const listRowContainerStyles = (isChecked: boolean, detail: boolean) => css`
  width: ${detail ? "996px" : "588px"};
  height: ${detail ? "64px" : "50px"};
  margin-top: 16px;
  border-radius: ${detail ? "24px" : "27px"};
  background-color: ${isChecked ? colors.violet100 : colors.white};
  border: 2px solid ${colors.slate900};
`;

const iconStyles = css`
  margin: 0 16px 0 12px;
  cursor: pointer;
`;

const StyledText = styled(Text)<{ isChecked: boolean; detail: boolean }>`
  text-decoration: ${props =>
    props.detail ? "none" : props.isChecked ? "line-through" : "none"};
  border-bottom: ${props =>
    props.detail ? `2px solid ${colors.slate900}` : "none"};
`;

export default CheckList;
