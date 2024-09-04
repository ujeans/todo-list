import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Flex from "../shared/Flex";
import Text from "../shared/Text";

interface EmptyListProps {
  largeImage: React.ElementType; // 큰 화면에서 사용할 이미지 컴포넌트
  smallImage: React.ElementType; // 작은 화면에서 사용할 이미지 컴포넌트
  message: string; // 빈 리스트일 때 표시할 메시지
}

function EmptyList({
  largeImage: LargeImage,
  smallImage: SmallImage,
  message,
}: EmptyListProps) {
  return (
    <Flex justify="center" align="center" direction="column" css={emptyStyles}>
      <StyledImage>
        {/* 큰 화면에서 사용할 이미지 */}
        <LargeImage className="large" />
        {/* 작은 화면에서 사용할 이미지 */}
        <SmallImage className="small" />
      </StyledImage>
      {/* 메시지 텍스트를 줄바꿈하여 표시 */}
      <Text typography="t4" color="slate400">
        {message.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </Text>
    </Flex>
  );
}

const emptyStyles = css`
  text-align: center;
  line-height: 1.2;

  @media (max-width: 744px) {
    margin-bottom: 48px;
  }
`;

const StyledImage = styled.div`
  margin: 64px 0 24px 0;
  position: relative;

  .large {
    display: block;
  }

  .small {
    display: none;
  }

  @media (max-width: 744px) {
    margin-top: 0;
  }

  @media (max-width: 375px) {
    margin-bottom: 16px;
    .large {
      display: none;
    }

    .small {
      display: block;
    }
  }
`;

export default EmptyList;
