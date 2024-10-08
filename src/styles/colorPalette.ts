import { css } from "@emotion/react";

// CSS 변수로 정의된 색상 팔레트를 전역적으로 적용
export const colorPalette = css`
  :root {
    --slate900: #0f172a;
    --slate800: #1e293b;
    --slate500: #64748b;
    --slate400: #94a3b8;
    --slate300: #cbd5e1;
    --slate200: #e2e8f0;
    --slate100: #f1f5f9;
    --violet600: #7c3aed;
    --violet100: #efe9fe;
    --rose500: #f43f5e;
    --lime300: #bef264;
    --amber800: #92400e;
    --amber200: #fde68a;
    --white: #fff;
    --gray50: #f9fafb;
  }
`;

// 색상 팔레트를 JavaScript 객체로 정의
export const colors = {
  slate900: "var(--slate900)",
  slate800: "var(--slate800)",
  slate500: "var(--slate500)",
  slate400: "var(--slate400)",
  slate300: "var(--slate300)",
  slate200: "var(--slate200)",
  slate100: "var(--slate100)",
  violet600: "var(--violet600)",
  violet100: "var(--violet100)",
  rose500: "var(--rose500)",
  lime300: "var(--lime300)",
  amber800: "var(--amber800)",
  amber200: "var(--amber200)",
  white: "var(--white)",
  gray50: "var(--gray50)",
};

// Colors 타입을 정의하여 colors 객체의 키를 타입으로 사용
export type Colors = keyof typeof colors;
