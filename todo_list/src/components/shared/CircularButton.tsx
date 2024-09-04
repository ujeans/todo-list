import styled from "@emotion/styled";
import { CircularButtonStyle, circularButtonStyleMap } from "@/styles/button";

// CircularButtonProps 인터페이스를 정의하여 컴포넌트가 받을 수 있는 props 타입을 지정
interface CircularButtonProps {
  styleType?: CircularButtonStyle; // 버튼 스타일 타입
  children: React.ReactNode; // 버튼 내부에 들어갈 내용 (아이콘 또는 텍스트)
  className?: string; // 추가적인 클래스 이름
  onClick?: () => void; // 버튼 클릭 시 호출되는 함수
}

// 스타일이 적용된 원형 버튼 컴포넌트 정의
export const CircularButton = styled.button<CircularButtonProps>(
  ({ styleType = "edit" }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    ...(circularButtonStyleMap[styleType] || {}),
  })
);

// CircularButtonComponent 컴포넌트 정의
export default function CircularButtonComponent({
  styleType = "edit",
  children,
  className,
  onClick,
}: CircularButtonProps) {
  return (
    <CircularButton
      styleType={styleType}
      className={className}
      onClick={onClick}
    >
      {children}
    </CircularButton>
  );
}
