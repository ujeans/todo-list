import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

import TodoImage from "@/assets/images/todo.svg";

interface TodoListProps {
  isChecked: boolean;
  onToggle: () => void;
}

function TodoList({ isChecked, onToggle }: TodoListProps) {
  return (
    <Flex direction="column">
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
