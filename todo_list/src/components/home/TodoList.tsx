import { css } from "@emotion/react";

import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

import TodoImage from "@/assets/images/todo.svg";

interface TodoListProps {
  isChecked: boolean;
  onToggle: () => void;
}

function TodoList({ isChecked, onToggle }: TodoListProps) {
  return (
    <Flex direction="column" css={listStyles}>
      <TodoImage />
      <CheckList
        text={"비타민 챙겨 먹기"}
        isChecked={isChecked}
        onClick={onToggle}
      />
    </Flex>
  );
}

export default TodoList;

const listStyles = css`
  width: 50%;

  @media (max-width: 744px) {
    width: 100%;
  }
`;
