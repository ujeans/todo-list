import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

import { colors } from "@/styles/colorPalette";

import Text from "../shared/Text";

import MemoImage from "@/assets/images/memo.svg";

interface MemoProps {
  currentMemo?: string | null;
  onMemoChange: (newMemo: string) => void;
}

function Memo({ currentMemo = "", onMemoChange }: MemoProps) {
  const [editedMemo, setEditedMemo] = useState(currentMemo || "");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // 메모 텍스트가 변경될 때 호출되는 함수
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMemo = event.target.value;
    setEditedMemo(newMemo); // 상태 업데이트
    onMemoChange(newMemo); // 부모 컴포넌트로 변경된 메모 전달
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"; // 높이를 초기화한 후
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // 텍스트 높이에 맞게 조정
    }
  }, [editedMemo]); // editedMemo가 변경될 때마다 높이를 조정

  return (
    <MemoContainer>
      <MemoStyles />

      <MemoText typography="t3" color="amber800">
        Memo
      </MemoText>

      <MemoTextArea
        ref={textAreaRef}
        value={editedMemo}
        onChange={handleChange}
        placeholder="메모를 입력하세요"
      />
    </MemoContainer>
  );
}

export default Memo;

const MemoContainer = styled.div`
  position: relative;
  width: 588px;
  height: 311px;
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 744px) {
    width: 100%;
  }
`;

const MemoStyles = styled(MemoImage)`
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

const MemoText = styled(Text)`
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translate(-50%);
`;

const MemoTextArea = styled.textarea`
  position: absolute;
  top: 55%;
  left: 50%;
  width: calc(100% - 32px);
  max-height: calc(100% - 70px);

  background: transparent;
  border: none;
  color: ${colors.slate800};
  font-size: 16px;
  font-family: inherit;
  resize: none;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 12px;
  line-height: 1.5; /* 텍스트 줄 간격 */
  text-align: center; /* 텍스트 수평 정렬 */
  transform: translate(-50%, -50%); /* 수직/수평 가운데 정렬 */
  overflow-y: auto; /* 스크롤 자동 처리 */
  height: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.amber200};
    border-radius: 3px;
  }
`;
