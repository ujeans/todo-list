import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Flex from "../shared/Flex";
import Text from "../shared/Text";

interface EmptyListProps {
  largeImage: React.ElementType;
  smallImage: React.ElementType;
  message: string;
}

function EmptyList({
  largeImage: LargeImage,
  smallImage: SmallImage,
  message,
}: EmptyListProps) {
  return (
    <Flex justify="center" align="center" direction="column" css={emptyStyles}>
      <StyledImage>
        <LargeImage className="large" />
        <SmallImage className="small" />
      </StyledImage>
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
