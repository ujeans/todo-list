import { css } from "@emotion/react";

import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

import EmptyList from "./EmptyList";

import TodoImage from "@/assets/images/todo.svg";
import EmptyTodoLargeImage from "@/assets/images/emptylarge1.svg";
import EmptyTodoSmallImage from "@/assets/images/emptysmall1.svg";

interface TodoListProps {
  todos: { id: number; name: string; isCompleted: boolean }[];
  onToggleTodo: (id: number) => void;
}

function TodoList({ todos, onToggleTodo }: TodoListProps) {
  return (
    <Flex direction="column" css={listStyles}>
      <TodoImage />
      {todos.length === 0 ? (
        <EmptyList
          largeImage={EmptyTodoLargeImage}
          smallImage={EmptyTodoSmallImage}
          message={"할 일이 없어요.\nTODO를 새롭게 추가해주세요!"}
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

export default TodoList;

const listStyles = css`
  /* width: 50%; */

  @media (max-width: 744px) {
    /* width: 100%; */
  }
`;
