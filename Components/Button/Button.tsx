import { ReactNode } from "react";
import "./button.css";

const variants = {
  primary: "btn_primary",
};

export default function Button({
  children,
  className,
  type,
  theme,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  theme: "primary";
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
}) {
  const variant = variants[theme];
  return (
    <button
      type={type ?? "button"}
      className={`btn ${className ?? ""} ${variant}`}
    >
      {children}
    </button>
  );
}
