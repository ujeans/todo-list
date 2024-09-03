import { css } from "@emotion/react";

import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

import EmptyList from "./EmptyList";

import DoneImage from "@/assets/images/done.svg";
import EmptyDoneLargeImage from "@/assets/images/emptyLarge2.svg";
import EmptyDoneSmallImage from "@/assets/images/emptysmall2.svg";

interface DoneListProps {
  todos: { id: number; name: string; isCompleted: boolean }[];
  onToggleTodo: (id: number) => void;
}

function DoneList({ todos, onToggleTodo }: DoneListProps) {
  return (
    <Flex direction="column" css={listStyles}>
      <DoneImage />
      {todos.length === 0 ? (
        <EmptyList
          largeImage={EmptyDoneLargeImage}
          smallImage={EmptyDoneSmallImage}
          message={"아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!"}
        />
      ) : (
        todos.map((todo, index) => (
          <CheckList
            itemId={todo.id}
            key={index}
            name={todo.name}
            isCompleted={todo.isCompleted}
            onClick={() => onToggleTodo(todo.id)}
          />
        ))
      )}
    </Flex>
  );
}

export default DoneList;

const listStyles = css`
  /* width: 50%; */

  @media (max-width: 744px) {
    /* width: 100%; */
  }
`;
