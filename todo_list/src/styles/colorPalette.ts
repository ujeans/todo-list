import { css } from "@emotion/react";

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
  }
`;

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
};

export type Colors = keyof typeof colors;
