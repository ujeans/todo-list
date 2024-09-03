import ListContainer from "./ListContainer";

import TodoImage from "@/assets/images/todo.svg";
import EmptyTodoLargeImage from "@/assets/images/emptylarge1.svg";
import EmptyTodoSmallImage from "@/assets/images/emptysmall1.svg";

interface TodoListProps {
  todos: { id: number; name: string; isCompleted: boolean }[];
  onToggleTodo: (id: number) => void;
}

function TodoList({ todos, onToggleTodo }: TodoListProps) {
  return (
    <ListContainer
      todos={todos}
      onToggleTodo={onToggleTodo}
      imageComponent={TodoImage}
      emptyLargeImage={EmptyTodoLargeImage}
      emptySmallImage={EmptyTodoSmallImage}
      emptyMessage={"할 일이 없어요.\nTODO를 새롭게 추가해주세요!"}
    />
  );
}

export default TodoList;
