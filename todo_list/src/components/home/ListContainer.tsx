import { css } from "@emotion/react";

import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

import EmptyList from "./EmptyList";

interface TodoListBaseProps {
  todos: { id: number; name: string; isCompleted: boolean }[];
  onToggleTodo: (id: number) => void;
  imageComponent: React.ElementType;
  emptyLargeImage: React.ElementType;
  emptySmallImage: React.ElementType;
  emptyMessage: string;
}

function ListContainer({
  todos,
  onToggleTodo,
  imageComponent: ImageComponent,
  emptyLargeImage,
  emptySmallImage,
  emptyMessage,
}: TodoListBaseProps) {
  return (
    <Flex direction="column" css={listStyles}>
      <ImageComponent />
      {/* 할 일 목록이 비어 있으면 EmptyList 컴포넌트를, 아니면 CheckList 컴포넌트를 표시 */}
      {todos.length === 0 ? (
        <EmptyList
          largeImage={emptyLargeImage}
          smallImage={emptySmallImage}
          message={emptyMessage}
        />
      ) : (
        todos.map(todo => (
          <CheckList
            itemId={todo.id}
            key={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            onClick={() => onToggleTodo(todo.id)}
          />
        ))
      )}
    </Flex>
  );
}

const listStyles = css`
  width: 50%;

  @media (max-width: 744px) {
    width: 100%;
  }
`;

export default ListContainer;
