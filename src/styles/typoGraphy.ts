import { css } from "@emotion/react";

// 타이포그래피 스타일을 정의한 객체
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

// Typography 타입을 정의하여 typographyMap 객체의 키를 타입으로 사용
export type Typography = keyof typeof typographyMap;
