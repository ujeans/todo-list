import { css } from "@emotion/react";

export const typographyMap = {
  t1: css`
    font-size: 20px;
    font-weight: 700;
  `,
  t2: css`
    font-size: 18px;
    font-weight: 700;
  `,
  t3: css`
    font-size: 16px;
    font-weight: 800;
  `,
  t4: css`
    font-size: 16px;
    font-weight: 700;
  `,
  t5: css`
    font-size: 16px;
    font-weight: 400;
  `,
};

export type Typography = keyof typeof typographyMap;
