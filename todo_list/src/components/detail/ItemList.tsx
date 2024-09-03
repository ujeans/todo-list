import React from "react";
import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

import { Todo } from "@/types/todo";

interface ItemListProps {
  itemData: Todo;
  onNameUpdate: (newName: string) => void;
}

function ItemList({ itemData, onNameUpdate }: ItemListProps) {
  return (
    <Flex>
      <CheckList
        itemId={itemData.id}
        name={itemData.name}
        isCompleted={itemData.isCompleted}
        detail={true}
        onNameUpdate={onNameUpdate}
      />
    </Flex>
  );
}

export default ItemList;
