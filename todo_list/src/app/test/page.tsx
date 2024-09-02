"use client";

import { useState } from "react";

import Text from "@/components/shared/Text";

import ButtonComponent from "@/components/shared/Button";
import CircularButtonComponent from "@/components/shared/CircularButton";
import Search from "@/components/shared/Search";
import CheckList from "@/components/shared/CheckList";

import PlusIcon from "@/assets/icons/plus.svg";
import XIcon from "@/assets/icons/X.svg";
import CheckIcon from "@/assets/icons/check.svg";
import AddIcon from "@/assets/icons/add.svg";
import EditIcon from "@/assets/icons/edit.svg";

export default function page() {
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(true);

  return (
    <div>
      <Text typography="t1" display="block" color="amber800">
        NanumSquare
      </Text>
      <Text typography="t2" color="violet100">
        NanumSquare
      </Text>
      <Text typography="t3">NanumSquare</Text>
      <Text typography="t4">NanumSquare</Text>
      <Text typography="t5">NanumSquare</Text>

      <div
        style={{
          height: 10,
          width: "100%",
          background: "#efefef",
          marginTop: 20,
          marginBottom: 20,
        }}
      ></div>

      <ButtonComponent color="default" icon={<PlusIcon />}>
        추가하기
      </ButtonComponent>
      <ButtonComponent color="add" icon={<PlusIcon />}>
        추가하기
      </ButtonComponent>
      <ButtonComponent color="delete" icon={<XIcon />}>
        삭제하기
      </ButtonComponent>
      <ButtonComponent color="default" icon={<CheckIcon />}>
        수정완료
      </ButtonComponent>
      <ButtonComponent color="edit" icon={<CheckIcon />}>
        수정완료
      </ButtonComponent>

      <ButtonComponent
        color="default"
        size="small"
        icon={<PlusIcon />}
      ></ButtonComponent>
      <ButtonComponent
        color="add"
        size="small"
        icon={<PlusIcon />}
      ></ButtonComponent>

      <div
        style={{
          height: 10,
          width: "100%",
          background: "#efefef",
          marginTop: 20,
          marginBottom: 20,
        }}
      ></div>

      <CircularButtonComponent styleType="plus">
        <AddIcon />
      </CircularButtonComponent>
      <CircularButtonComponent styleType="edit">
        <EditIcon />
      </CircularButtonComponent>

      <div
        style={{
          height: 10,
          width: "100%",
          background: "#efefef",
          marginTop: 20,
          marginBottom: 20,
        }}
      ></div>

      <Search placeholder="할 일을 입력해주세요" />

      <div
        style={{
          height: 10,
          width: "100%",
          background: "#efefef",
          marginTop: 20,
          marginBottom: 20,
        }}
      ></div>

      <CheckList
        text={"비타민 챙겨 먹기"}
        isCompleted={firstChecked}
        onClick={() => setFirstChecked(!firstChecked)}
      />
      <CheckList
        text={"비타민 챙겨 먹기"}
        isCompleted={secondChecked}
        onClick={() => setFirstChecked(!secondChecked)}
      />

      <CheckList
        text={"비타민 챙겨 먹기"}
        isCompleted={firstChecked}
        detail={true}
        onClick={() => setFirstChecked(!firstChecked)}
      />
      <CheckList
        text={"비타민 챙겨 먹기"}
        isCompleted={secondChecked}
        detail={true}
        onClick={() => setFirstChecked(!secondChecked)}
      />
    </div>
  );
}
