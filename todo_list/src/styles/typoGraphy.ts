import { css } from "@emotion/react";

export const typographyMap = {
  t1: css`
    font-size: 20px;
    font-weight: bold;
  `,
  t2: css`
    font-size: 18px;
    font-weight: bold;
  `,
  t3: css`
    font-size: 16px;
    font-weight: bold;
  `,
  t4: css`
    font-size: 16px;
    font-weight: bold;
  `,
  t5: css`
    font-size: 16px;
    font-weight: 400;
  `,
};

export type Typography = keyof typeof typographyMap;
