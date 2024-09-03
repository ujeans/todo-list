import React from "react";
import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

interface ItemListProps {
  itemData: {
    id: number;
    tenantId: string;
    name: string;
    memo: string | null;
    imageUrl: string | null;
    isCompleted: boolean;
  };
}

function ItemList({ itemData }: ItemListProps) {
  return (
    <Flex>
      <CheckList
        itemId={itemData.id}
        text={itemData.name}
        isCompleted={itemData.isCompleted}
        detail={true}
      />
    </Flex>
  );
}

export default ItemList;
