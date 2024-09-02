import styled from "@emotion/styled";
import {
  ButtonColor,
  buttonColorMap,
  ButtonSize,
  buttonSizeMap,
} from "@/styles/button";

interface ButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: React.ReactNode;
}

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

export default function ButtonComponent({
  color = "default",
  size = "large",
  icon,
  children,
}: ButtonProps & { children?: React.ReactNode }) {
  return (
    <Button color={color} size={size}>
      {icon && <span>{icon}</span>}
      {size !== "small" && children}
    </Button>
  );
}
