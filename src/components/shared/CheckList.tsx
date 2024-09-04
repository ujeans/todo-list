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

// CheckList 컴포넌트에 전달되는 props의 타입을 정의
interface CheckListProps {
  itemId: number; // 할 일 항목의 ID
  name: string; // 할 일 항목의 이름
  isCompleted?: boolean; // 할 일 항목의 완료 상태
  detail?: boolean; // 상세보기 여부에 따라 스타일을 달리 적용
  onClick?: () => void; // 할 일 항목 클릭 시 호출되는 함수
  onNameUpdate?: (newText: string) => void; // 할 일 이름이 변경될 때 호출되는 함수
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

  const [isEditing, setIsEditing] = useState(false); // 이름을 편집 중인지 여부를 관리하는 상태
  const [currentItemName, setCurrentItemName] = useState(name); // 현재 할 일 항목의 이름을 관리하는 상태

  // 할 일 항목을 클릭했을 때 상세 페이지로 이동
  const navigateTo = (event: React.MouseEvent) => {
    // SVG 또는 Div를 클릭한 경우에는 상세 페이지로 이동하지 않음
    if (
      event.target instanceof SVGAElement ||
      event.target instanceof HTMLDivElement
    ) {
      return;
    }
    router.push(`/items/${itemId}`);
  };

  // 완료 상태를 토글하는 함수
  const handleToggle = (event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 전파를 중지하여 상세 페이지로 이동하지 않도록 함
    if (onClick) onClick();
  };

  // 텍스트를 클릭하여 편집 모드를 활성화
  const handleTextClick = () => {
    if (detail) {
      setIsEditing(true);
    }
  };

  // 텍스트 변경을 처리하는 함수
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentItemName(event.target.value);
  };

  // 텍스트 편집이 끝났을 때 호출되는 함수
  const handleTextBlur = () => {
    setIsEditing(false); // 편집 모드를 비활성화
    if (onNameUpdate) onNameUpdate(currentItemName); // 변경된 이름을 부모 컴포넌트로 전달
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
        {isCompleted ? <Checkedbox /> : <Checkbox />}{" "}
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
