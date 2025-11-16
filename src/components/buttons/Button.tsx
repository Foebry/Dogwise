import type React from "react";
import type { ReactNode } from "react";
import { classNames } from "@/shared/functions";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<any>) => void;
  label: string | ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  link?: string;
}

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

const Button: React.FC<ButtonProps> = ({ onClick, label, className = "", disabled = false, variant = ButtonVariant.PRIMARY, link }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`${classNames({
        "border border-solid rounded-lg p-2 font-semibold cursor-pointer": true,
        "bg-tertiary border-tertiary text-white": variant === ButtonVariant.PRIMARY,
        "bg-primary border-primary text-white": variant === ButtonVariant.SECONDARY,
        "bg-grey border-green-200 text-color-primary": variant === ButtonVariant.TERTIARY,
        "bg-grey": disabled,
      })} ${className}`}
      onClick={onClick}
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          onClick={(e) => {
            if (onClick) e.preventDefault();
          }}
        >
          {label}
        </a>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
