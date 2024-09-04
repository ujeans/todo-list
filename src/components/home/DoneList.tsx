import ListContainer from "./ListContainer";

import DoneImage from "@/assets/images/done.svg";
import EmptyDoneLargeImage from "@/assets/images/emptyLarge2.svg";
import EmptyDoneSmallImage from "@/assets/images/emptysmall2.svg";

interface DoneListProps {
  todos: { id: number; name: string; isCompleted: boolean }[];
  onToggleTodo: (id: number) => void;
}

function DoneList({ todos, onToggleTodo }: DoneListProps) {
  return (
    <ListContainer
      todos={todos}
      onToggleTodo={onToggleTodo}
      imageComponent={DoneImage}
      emptyLargeImage={EmptyDoneLargeImage}
      emptySmallImage={EmptyDoneSmallImage}
      emptyMessage={"아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!"}
    />
  );
}

export default DoneList;
