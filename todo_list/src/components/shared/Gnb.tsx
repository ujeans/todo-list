import { css } from "@emotion/react";
import Link from "next/link";

import { colors } from "@/styles/colorPalette";

import Flex from "./Flex";

import LargeImage from "@/assets/images/large.svg";
import SmallImage from "@/assets/images/small.svg";

function Gnb() {
  return (
    <Flex align="center" css={container}>
      <Flex align="center" css={wrapper}>
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

const ResponsiveImage = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Flex css={largeImageStyle}>
        <Link href="/" passHref legacyBehavior>
          <a onClick={handleClick}>
            <LargeImage />
          </a>
        </Link>
      </Flex>
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
