import { css } from "@emotion/react";

import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

import DoneImage from "@/assets/images/done.svg";
interface DoneListProps {
  todos: { id: number; name: string; isCompleted: boolean }[];
  onToggleTodo: (id: number) => void;
}

function DoneList({ todos, onToggleTodo }: DoneListProps) {
  return (
    <Flex direction="column" css={listStyles}>
      <DoneImage />
      {todos.map((todo, index) => (
        <CheckList
          itemId={todo.id}
          key={index}
          name={todo.name}
          isCompleted={todo.isCompleted}
          onClick={() => onToggleTodo(todo.id)}
        />
      ))}
    </Flex>
  );
}

export default DoneList;

const listStyles = css`
  width: 50%;

  @media (max-width: 744px) {
    width: 100%;
  }
`;
