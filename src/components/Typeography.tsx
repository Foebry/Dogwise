import Link from "next/link";
import React, { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  color?: string;
}

interface LinkProps extends Props {
  to: string;
}

export const Title1: React.FC<Props> = ({ children, className }) => {
  return <h1 className={`${className} text-4xl text-black-200`}>{children}</h1>;
};

export const Title2: React.FC<Props> = ({ children, className }) => {
  return <h2 className={`${className} text-2xl font-extrabold mb-2`}>{children}</h2>;
};

export const Title3: React.FC<Props> = ({ children, className }) => {
  return <h3 className={`${className} text-xl font-bold text-black-200 relative`}>{children}</h3>;
};

export const Body: React.FC<Props> = ({ children, className, color }) => {
  return <p className={`${className} text-base mb-2`}>{children}</p>;
};

export const EbmeddedLink: React.FC<LinkProps> = ({ children, to }) => {
  return (
    <Link href={to}>
      <span className="text-center text-green-500 underline hover:cursor-pointer">{children}</span>
    </Link>
  );
};

export const FormError: React.FC<Props> = ({ children, className }) => {
  return <p className={`${className} absolute left-1 -bottom-3.5 text-red-600 text-xs`}>{children}</p>;
};
