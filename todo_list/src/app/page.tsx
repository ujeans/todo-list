"use client";
import { useState } from "react";

import Gnb from "@/components/shared/Gnb";
import Container from "@/components/shared/Container";
import Flex from "@/components/shared/Flex";

import SearchBar from "@/components/home/SearchBar";
import TodoList from "@/components/home/TodoList";
import DoneList from "@/components/home/DoneList";

export default function Home() {
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(true);

  return (
    <>
      <Gnb />
      <Container detail={true}>
        <SearchBar />

        <Flex justify="space-between">
          <TodoList
            isChecked={firstChecked}
            onToggle={() => setFirstChecked(!firstChecked)}
          />
          <DoneList
            isChecked={secondChecked}
            onToggle={() => setSecondChecked(!secondChecked)}
          />
        </Flex>
      </Container>
    </>
  );
}
