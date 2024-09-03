"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { colors } from "@/styles/colorPalette";

import Flex from "./Flex";
import Text from "./Text";

import Checkbox from "@/assets/icons/checkbox.svg";
import Checkedbox from "@/assets/icons/checkedbox.svg";

interface CheckListProps {
  itemId: number;
  name: string;
  isCompleted?: boolean;
  detail?: boolean;
  onClick?: () => void;
  onNameUpdate?: (newText: string) => void;
}

function CheckList({
  itemId,
  name,
  isCompleted = false,
  detail = false,
  onClick,
  onNameUpdate,
}: CheckListProps) {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [currentItemName, setCurrentItemName] = useState(name);

  const navigateTo = (event: React.MouseEvent) => {
    if (
      event.target instanceof SVGAElement ||
      event.target instanceof HTMLDivElement
    ) {
      return;
    }
    router.push(`/items/${itemId}`);
  };

  const handleToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (onClick) onClick();
  };

  const handleTextClick = () => {
    if (detail) {
      setIsEditing(true);
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentItemName(event.target.value);
  };

  const handleTextBlur = () => {
    setIsEditing(false);
    if (onNameUpdate) onNameUpdate(currentItemName); // 텍스트 업데이트
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
      {isEditing ? (
        <StyledInput
          value={currentItemName}
          onChange={handleTextChange}
          onBlur={handleTextBlur}
          autoFocus
        />
      ) : (
        <StyledText
          typography={detail ? "t1" : "t5"}
          color={detail ? "slate900" : "slate800"}
          isCompleted={isCompleted}
          detail={detail}
          onClick={handleTextClick}
        >
          {name}
        </StyledText>
      )}
    </Flex>
  );
}

const listRowContainerStyles = (isCompleted: boolean, detail: boolean) => css`
  /* width: 100%; */
  width: ${detail ? "996px" : "588px"};
  height: ${detail ? "64px" : "50px"};
  margin-top: 16px;
  border-radius: ${detail ? "24px" : "27px"};
  background-color: ${isCompleted ? colors.violet100 : colors.white};
  border: 2px solid ${colors.slate900};

  cursor: pointer;

  &:last-child {
    margin-bottom: ${detail ? "0" : "48px"};
  }

  @media (max-width: 744px) {
    width: 696px;
  }

  @media (max-width: 375px) {
    width: 344px;
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

const StyledInput = styled.input`
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  background: none;
  border: none;
  outline: none;
  width: 100%;
  border-bottom: 2px solid ${colors.slate900};
`;

export default CheckList;
