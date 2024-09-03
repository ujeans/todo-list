import React from "react";
import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

import { Todo } from "@/types/todo";

interface ItemListProps {
  itemData: Todo;
  onToggleTodo: (id: number) => void;
}

function ItemList({ itemData, onToggleTodo }: ItemListProps) {
  return (
    <Flex>
      <CheckList
        itemId={itemData.id}
        text={itemData.name}
        isCompleted={itemData.isCompleted}
        detail={true}
        onClick={() => onToggleTodo(itemData.id)}
      />
    </Flex>
  );
}

export default ItemList;
