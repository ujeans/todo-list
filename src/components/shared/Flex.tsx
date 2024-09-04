import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { SerializedStyles } from "@emotion/react";

// FlexProps 인터페이스를 정의하여 Flex 컴포넌트가 받을 수 있는 props 타입을 지정
interface FlexProps {
  align?: CSSProperties["alignItems"]; // Flexbox의 align-items 속성 (수직 정렬)
  justify?: CSSProperties["justifyContent"]; // Flexbox의 justify-content 속성 (수평 정렬)
  direction?: CSSProperties["flexDirection"]; // Flexbox의 flex-direction 속성 (레이아웃 방향)
  css?: SerializedStyles; // 추가적인 CSS 스타일을 적용하기 위한 Emotion의 SerializedStyles 타입
}

// Flex 컴포넌트를 styled.div로 정의
const Flex = styled.div<FlexProps>(
  ({ align, justify, direction, css: cssProp }) => [
    {
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction,
    },
    cssProp,
  ]
);

export default Flex;
