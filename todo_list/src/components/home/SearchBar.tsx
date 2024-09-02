import { css } from "@emotion/react";

import ButtonComponent from "../shared/Button";
import Flex from "../shared/Flex";
import Search from "../shared/Search";

import PlusIcon from "@/assets/icons/plus.svg";

function SearchBar() {
  return (
    <Flex justify="space-between" css={wrapper}>
      <Search placeholder="할 일을 입력해주세요" />
      <ButtonComponent color="default" icon={<PlusIcon />}>
        추가하기
      </ButtonComponent>
    </Flex>
  );
}

const wrapper = css`
  width: 100%;
  margin: 24px 0 40px 0;
`;

export default SearchBar;
