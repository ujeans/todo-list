import styled from "@emotion/styled";
import { CircularButtonStyle, circularButtonStyleMap } from "@/styles/button";

interface CircularButtonProps {
  styleType?: CircularButtonStyle;
  children: React.ReactNode;
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
}: CircularButtonProps) {
  return <CircularButton styleType={styleType}>{children}</CircularButton>;
}
