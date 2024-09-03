import React from "react";
import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

import { Todo } from "@/types/todo";

interface ItemListProps {
  itemData: Todo;
  onToggleTodo: (id: number) => void;
  onNameUpdate: (newName: string) => void;
}

function ItemList({ itemData, onToggleTodo, onNameUpdate }: ItemListProps) {
  return (
    <Flex>
      <CheckList
        itemId={itemData.id}
        name={itemData.name}
        isCompleted={itemData.isCompleted}
        detail={true}
        onClick={() => onToggleTodo(itemData.id)}
        onNameUpdate={onNameUpdate}
      />
    </Flex>
  );
}

export default ItemList;
