/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */

import Link from "next/link";
import type React from "react";

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const handleScroll = (event: any) => {
    event.preventDefault();
    const element = document.querySelector(href.replace(/^.*#/, "#"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <span className={`hover:cursor-pointer hover:text-color-primary`}>
      <Link href={href} scroll={true}>
        <span onClick={handleScroll}>{label}</span>
      </Link>
    </span>
  );
};

export default NavLink;
