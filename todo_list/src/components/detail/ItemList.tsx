import React from "react";
import Flex from "../shared/Flex";
import CheckList from "../shared/CheckList";

interface ItemListProps {
  isChecked: boolean;
}

function ItemList({ isChecked }: ItemListProps) {
  return (
    <Flex>
      <CheckList
        text={"비타민 챙겨 먹기"}
        isChecked={isChecked}
        detail={true}
      />
    </Flex>
  );
}

export default ItemList;
