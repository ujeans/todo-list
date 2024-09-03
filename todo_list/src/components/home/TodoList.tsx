import { css } from "@emotion/react";

import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

import TodoImage from "@/assets/images/todo.svg";

interface TodoListProps {
  todos: { id: number; name: string; isCompleted: boolean }[];
  onToggleTodo: (id: number) => void;
}

function TodoList({ todos, onToggleTodo }: TodoListProps) {
  return (
    <Flex direction="column" css={listStyles}>
      <TodoImage />
      {todos.map((todo, index) => (
        <CheckList
          itemId={todo.id}
          key={index}
          text={todo.name}
          isCompleted={todo.isCompleted}
          onClick={() => onToggleTodo(todo.id)}
        />
      ))}
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
