import { css } from "@emotion/react";

import ButtonComponent from "../shared/Button";
import Flex from "../shared/Flex";
import Search from "../shared/Search";

import PlusIcon from "@/assets/icons/plus.svg";
import { useEffect, useState } from "react";

function SearchBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex justify="space-between" css={wrapper}>
      <Search placeholder="할 일을 입력해주세요" />
      {isMobile ? (
        <ButtonComponent color="default" size="small" icon={<PlusIcon />} />
      ) : (
        <ButtonComponent color="default" icon={<PlusIcon />}>
          추가하기
        </ButtonComponent>
      )}
    </Flex>
  );
}

const wrapper = css`
  width: 100%;
  margin: 24px 0 40px 0;
  gap: 16px;

  @media (max-width: 375px) {
    gap: 8px;
  }
`;

export default SearchBar;
