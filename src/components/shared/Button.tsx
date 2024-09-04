import styled from "@emotion/styled";
import {
  ButtonColor,
  buttonColorMap,
  ButtonSize,
  buttonSizeMap,
} from "@/styles/button";

// ButtonProps 인터페이스를 정의하여 버튼 컴포넌트가 받는 props의 타입을 지정
interface ButtonProps {
  color?: ButtonColor; // 버튼의 색상
  size?: ButtonSize; // 버튼의 크기
  icon?: React.ReactNode; // 버튼에 표시할 아이콘
  onClick?: () => void; // 버튼 클릭 시 호출되는 함수
}

// 스타일이 적용된 버튼 컴포넌트를 정의
export const Button = styled.button<ButtonProps>(
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "24px",
    gap: "4px",
  },
  ({ color = "default" }) => buttonColorMap[color],
  ({ size = "large" }) => buttonSizeMap[size]
);

// ButtonComponent 컴포넌트를 정의하여 버튼의 기능을 구현
export default function ButtonComponent({
  color = "default",
  size = "large",
  icon,
  children,
  onClick,
}: ButtonProps & { children?: React.ReactNode }) {
  return (
    <Button color={color} size={size} onClick={onClick}>
      {icon && <span>{icon}</span>} {/* 아이콘이 있는 경우 아이콘을 표시 */}
      {size !== "small" && children}
      {/* 버튼이 작지 않은 경우에만 텍스트 표시 */}
    </Button>
  );
}
