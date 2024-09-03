import styled from "@emotion/styled";
import { CircularButtonStyle, circularButtonStyleMap } from "@/styles/button";

interface CircularButtonProps {
  styleType?: CircularButtonStyle;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CircularButton = styled.button<CircularButtonProps>(
  ({ styleType = "edit" }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    ...(circularButtonStyleMap[styleType] || {}),
  })
);

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
