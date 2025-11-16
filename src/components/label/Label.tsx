import type { HTMLProps } from "react";

const Label: React.FC<HTMLProps<HTMLSpanElement>> = ({ children, className }) => (
  <span className={`text-white bg-primary border-primary px-2 md:py-1 rounded-xl flex items-center text-center ${className}`}>{children}</span>
);

export default Label;
