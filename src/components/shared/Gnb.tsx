import { css } from "@emotion/react";
import Link from "next/link";

import { colors } from "@/styles/colorPalette";

import Flex from "./Flex";

import LargeImage from "@/assets/images/large.svg";
import SmallImage from "@/assets/images/small.svg";

// Gnb (Global Navigation Bar) 컴포넌트를 정의
function Gnb() {
  return (
    // Flex 컴포넌트를 사용하여 상단 고정 네비게이션 바를 구성
    <Flex align="center" css={container}>
      <Flex align="center" css={wrapper}>
        {/* 반응형 이미지 컴포넌트 */}
        <ResponsiveImage />
      </Flex>
    </Flex>
  );
}

const container = css`
  width: 100vw;
  height: 60px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.slate200};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const wrapper = css`
  margin: 0 auto;
  width: 1200px;
  height: 100%;

  @media (max-width: 744px) {
    width: 100%;
    padding-left: 24px;
  }

  @media (max-width: 375px) {
    padding-left: 16px;
  }
`;

// 반응형 이미지 컴포넌트를 정의
const ResponsiveImage = () => {
  const handleClick = () => {
    window.location.href = "/"; // 로고 클릭 시 메인 페이지로 이동
  };

  return (
    <>
      {/* 큰 화면에서 표시할 이미지 */}
      <Flex css={largeImageStyle}>
        <Link href="/" passHref legacyBehavior>
          <a onClick={handleClick}>
            <LargeImage />
          </a>
        </Link>
      </Flex>
      {/* 작은 화면에서 표시할 이미지 */}
      <Flex css={smallImageStyle}>
        <Link href="/" passHref legacyBehavior>
          <a onClick={handleClick}>
            <SmallImage />
          </a>
        </Link>
      </Flex>
    </>
  );
};

const largeImageStyle = css`
  display: block;
  cursor: pointer;

  @media (max-width: 375px) {
    display: none;
  }
`;

const smallImageStyle = css`
  display: none;
  cursor: pointer;

  @media (max-width: 375px) {
    display: block;
  }
`;

export default Gnb;
