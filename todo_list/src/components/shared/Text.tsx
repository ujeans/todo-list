"use client";

import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { colors, Colors } from "@/styles/colorPalette";
import { Typography, typographyMap } from "@/styles/typoGraphy";

// TextProps 인터페이스를 정의하여 Text 컴포넌트가 받을 수 있는 props 타입을 지정
interface TextProps {
  typography?: Typography; // 타이포그래피 스타일을 정의하는 prop
  color?: Colors; // 텍스트 색상을 정의하는 prop
  display?: CSSProperties["display"]; // CSS display 속성을 정의하는 prop
  textAlign?: CSSProperties["textAlign"]; // 텍스트 정렬을 정의하는 prop
}

// Text 컴포넌트를 styled.span으로 정의
const Text = styled.span<TextProps>(
  ({ color = "slate900", display, textAlign }) => ({
    color: colors[color], // var(--slate900)
    display,
    textAlign,
  }),
  ({ typography = "t3" }) => typographyMap[typography]
);

export default Text;
