import { css } from "@emotion/react";

import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

import DoneImage from "@/assets/images/done.svg";

interface DoneListProps {
  isChecked: boolean;
  onToggle: () => void;
}

function DoneList({ isChecked, onToggle }: DoneListProps) {
  return (
    <Flex direction="column" css={listStyles}>
      <DoneImage />
      <CheckList
        text={"은행다녀오기"}
        isChecked={isChecked}
        onClick={onToggle}
      />
    </Flex>
  );
}

export default DoneList;

const listStyles = css`
  width: 50%;
`;
