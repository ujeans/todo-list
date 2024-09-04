import { css } from "@emotion/react";

import Button from "../shared/Button";
import Flex from "../shared/Flex";
import Search from "../shared/Search";

import PlusIcon from "@/assets/icons/plus.svg";
import { useEffect, useState } from "react";

interface SearchBarProps {
  onAddTodo: (newTodo: string) => void;
}

function SearchBar({ onAddTodo }: SearchBarProps) {
  // inputValue는 입력 필드의 현재 값을 관리하는 상태
  const [inputValue, setInputValue] = useState("");
  // isMobile은 현재 화면이 모바일인지 여부를 관리하는 상태
  const [isMobile, setIsMobile] = useState(false);

  // 입력 필드의 값이 변경될 때 호출되는 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 추가 버튼을 클릭하거나 엔터 키를 눌렀을 때 호출되는 함수
  const handleAddTodo = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue(""); // 입력 필드를 초기화
    }
  };

  // 입력 필드에서 엔터 키를 눌렀을 때 handleAddTodo를 호출
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  // 화면 크기에 따라 isMobile 상태를 업데이트하는 useEffect 훅
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375); // 화면 너비가 375px 이하인 경우 모바일로 간주
    };

    handleResize(); // 컴포넌트가 마운트될 때 즉시 실행
    window.addEventListener("resize", handleResize); // 리사이즈 이벤트 리스너 등록

    return () => {
      window.removeEventListener("resize", handleResize); // 컴포넌트 언마운트 시 리스너 제거
    };
  }, []);

  return (
    <Flex justify="space-between" css={wrapper}>
      {/* 할 일을 입력받는 Search 컴포넌트 */}
      <Search
        placeholder="할 일을 입력해주세요"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />

      {/* 모바일 화면에서는 아이콘 버튼, 그 외에는 텍스트 버튼 */}
      {isMobile ? (
        <Button
          color="default"
          size="small"
          icon={<PlusIcon />}
          onClick={handleAddTodo}
        />
      ) : (
        <Button color="default" icon={<PlusIcon />} onClick={handleAddTodo}>
          추가하기
        </Button>
      )}
    </Flex>
  );
}

const wrapper = css`
  width: 100%;
  margin: 24px 0 40px 0;
  gap: 16px;

  @media (max-width: 375px) {
    gap: 8px;
  }
`;

export default SearchBar;
