"use client";

import styled from "@emotion/styled";
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

// 컴포넌트 테스트
export default function TestPage() {
  // 체크박스 상태를 관리하는 두 개의 useState 훅
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(true);

  return (
    <div
      style={{
        marginTop: 100,
      }}
    >
      {/* 다양한 텍스트 스타일 테스트 */}
      <Text typography="t1" display="block" color="amber800">
        NanumSquare
      </Text>
      <Text typography="t2" color="violet100">
        NanumSquare
      </Text>
      <Text typography="t3">NanumSquare</Text>
      <Text typography="t4">NanumSquare</Text>
      <Text typography="t5">NanumSquare</Text>

      <Line />

      {/* 다양한 버튼 스타일 테스트 */}
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

      {/* 아이콘만 있는 작은 버튼 테스트 */}
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

      <Line />

      {/* 원형 버튼 스타일 테스트 */}
      <CircularButtonComponent styleType="plus">
        <AddIcon />
      </CircularButtonComponent>
      <CircularButtonComponent styleType="edit">
        <EditIcon />
      </CircularButtonComponent>

      <Line />

      {/* 검색창 컴포넌트 테스트 */}
      <Search placeholder="할 일을 입력해주세요" />

      <Line />

      {/* 체크리스트 항목 테스트 */}
      <CheckList
        itemId={1}
        name={"비타민 챙겨 먹기"}
        isCompleted={firstChecked}
        onClick={() => setFirstChecked(!firstChecked)}
      />
      <CheckList
        itemId={2}
        name={"비타민 챙겨 먹기"}
        isCompleted={secondChecked}
        onClick={() => setFirstChecked(!secondChecked)}
      />

      {/* 상세 보기 모드에서의 체크리스트 항목 테스트 */}
      <CheckList
        itemId={3}
        name={"비타민 챙겨 먹기"}
        isCompleted={firstChecked}
        detail={true}
        onClick={() => setFirstChecked(!firstChecked)}
      />
      <CheckList
        itemId={4}
        name={"비타민 챙겨 먹기"}
        isCompleted={secondChecked}
        detail={true}
        onClick={() => setFirstChecked(!secondChecked)}
      />
    </div>
  );
}

const Line = styled.div`
  height: 10px;
  width: 100%;
  background: #ac9696;
  margin: 20px 0;
`;
