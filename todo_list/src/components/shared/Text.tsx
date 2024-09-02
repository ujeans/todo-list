"use client";

import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { colors, Colors } from "@/styles/colorPalette";
import { Typography, typographyMap } from "@/styles/typoGraphy";

interface TextProps {
  typography?: Typography;
  color?: Colors;
  display?: CSSProperties["display"];
  textAlign?: CSSProperties["textAlign"];
}

const Text = styled.span<TextProps>(
  ({ color = "slate900", display, textAlign }) => ({
    color: colors[color], // var(--slate900)
    display,
    textAlign,
  }),
  ({ typography = "t3" }) => typographyMap[typography]
);

export default Text;
