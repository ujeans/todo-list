import { useState } from "react";
import styled from "@emotion/styled";

import { colors } from "@/styles/colorPalette";

import Text from "../shared/Text";

import MemoImage from "@/assets/images/memo.svg";

function Memo() {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <MemoContainer>
      <MemoStyles />
      <MemoText typography="t3" color="amber800">
        Memo
      </MemoText>
      <MemoTextArea value={text} onChange={handleChange} />
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
  transform: translate(-50%, -50%);
`;

const MemoTextArea = styled.textarea`
  position: absolute;
  top: 40px;
  left: 20px;
  width: calc(100% - 32px);
  height: calc(100% - 70px);
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
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.amber200};
    border-radius: 3px;
  }
`;
