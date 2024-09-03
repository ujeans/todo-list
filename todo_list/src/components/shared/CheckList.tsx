"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

import { colors } from "@/styles/colorPalette";

import Flex from "./Flex";
import Text from "./Text";

import Checkbox from "@/assets/icons/checkbox.svg";
import Checkedbox from "@/assets/icons/checkedbox.svg";

interface CheckListProps {
  itemId: number;
  text: string;
  isCompleted?: boolean;
  detail?: boolean;
  onClick?: () => void;
}

function CheckList({
  itemId,
  text,
  isCompleted = false,
  detail = false,
  onClick,
}: CheckListProps) {
  const router = useRouter();

  const navigateTo = () => {
    router.push(`/items/${itemId}`);
  };

  const handleToggle = () => {
    if (onClick) onClick();
  };

  return (
    <Flex
      as="li"
      align="center"
      justify={detail ? "center" : "flex-start"}
      css={listRowContainerStyles(isCompleted, detail)}
      onClick={navigateTo}
    >
      <Flex css={iconStyles} onClick={handleToggle}>
        {isCompleted ? <Checkedbox /> : <Checkbox />}
      </Flex>
      <StyledText
        typography={detail ? "t1" : "t5"}
        color={detail ? "slate900" : "slate800"}
        isCompleted={isCompleted}
        detail={detail}
      >
        {text}
      </StyledText>
    </Flex>
  );
}

const listRowContainerStyles = (isCompleted: boolean, detail: boolean) => css`
  width: 100%;
  height: ${detail ? "64px" : "50px"};
  margin-top: 16px;
  border-radius: ${detail ? "24px" : "27px"};
  background-color: ${isCompleted ? colors.violet100 : colors.white};
  border: 2px solid ${colors.slate900};

  cursor: pointer;

  &:last-child {
    margin-bottom: ${detail ? "0" : "48px"};
  }
`;

const iconStyles = css`
  margin: 0 16px 0 12px;
  cursor: pointer;
`;

const StyledText = styled(Text)<{ isCompleted: boolean; detail: boolean }>`
  text-decoration: ${props =>
    props.detail ? "none" : props.isCompleted ? "line-through" : "none"};
  border-bottom: ${props =>
    props.detail ? `2px solid ${colors.slate900}` : "none"};
`;

export default CheckList;
