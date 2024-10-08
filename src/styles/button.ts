import { css } from "@emotion/react";

import { colors } from "./colorPalette";

// 버튼 색상 스타일을 정의하는 객체
export const buttonColorMap = {
  default: css`
    background-color: ${colors.slate200};
    border: 2px solid ${colors.slate900};
    color: ${colors.slate900};
    box-shadow: 1px 4px ${colors.slate900};
  `,
  delete: css`
    background-color: ${colors.rose500};
    border: 2px solid ${colors.slate900};
    color: ${colors.white};
    box-shadow: 1px 4px ${colors.slate900};
  `,
  add: css`
    background-color: ${colors.violet600};
    border: 2px solid ${colors.slate900};
    color: ${colors.white};
    box-shadow: 1px 4px ${colors.slate900};
  `,
  edit: css`
    background-color: ${colors.lime300};
    border: 2px solid ${colors.slate900};
    color: ${colors.slate900};
    box-shadow: 1px 4px ${colors.slate900};
  `,
};

// 버튼 크기 스타일을 정의하는 객체
export const buttonSizeMap = {
  small: css`
    width: 54.78px;
    height: 52px;
  `,

  large: css`
    width: 164px;
    height: 52px;
  `,
};

// 원형 버튼 스타일을 정의하는 객체
export const circularButtonStyleMap = {
  plus: css`
    width: 64px;
    height: 64px;
    background-color: ${colors.slate200};
    color: ${colors.slate900};
    border: none;
    border-radius: 50%;
  `,
  edit: css`
    width: 64px;
    height: 64px;
    background-color: rgba(15, 23, 42, 0.5);
    border: 2px solid ${colors.slate900};
    color: ${colors.white};
    border-radius: 50%;
  `,
};

// 버튼 색상 타입 정의
export type ButtonColor = keyof typeof buttonColorMap;

// 버튼 크기 타입 정의
export type ButtonSize = keyof typeof buttonSizeMap;

// 원형 버튼 스타일 타입 정의
export type CircularButtonStyle = keyof typeof circularButtonStyleMap;
