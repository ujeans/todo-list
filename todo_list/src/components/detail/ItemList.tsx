import React from "react";
import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

interface ItemListProps {
  isCompleted: boolean;
}

function ItemList({ isCompleted }: ItemListProps) {
  return (
    <Flex>
      <CheckList
        text={"비타민 챙겨 먹기"}
        isCompleted={isCompleted}
        detail={true}
      />
    </Flex>
  );
}

export default ItemList;
