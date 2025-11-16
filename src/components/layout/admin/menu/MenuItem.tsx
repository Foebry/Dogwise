/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import type { ReactNode } from "react";
import { useState } from "react";
import { classNames } from "@/shared/functions";

interface Props {
  title: string;
  icon?: string | ReactNode;
  link: string;
  children?: ReactNode;
  activeLinks?: string[];
}

const MenuItem: React.FC<Props> = ({ title, icon, link, children, activeLinks = [] }) => {
  const [showSubMenuItems, setShowSubMenuItems] = useState<boolean>(false);
  const pathname = usePathname();

  const activePage = (link.includes(pathname) || activeLinks.includes(pathname)) && pathname !== "/admin";

  return (
    <Link
      href={link}
      className="flex gap-2 items-center cursor-pointer text-gray-100 pl-5 my-2 capitalize relative"
      onMouseEnter={() => setShowSubMenuItems(true)}
      onMouseLeave={() => setShowSubMenuItems(false)}
    >
      {/* <a className="flex gap-2 items-center cursor-pointer text-gray-100 pl-5 my-2 capitalize relative"> */}
      {icon}
      {/* <Link href={link}> */}
      <span className={`hover:font-bold ${classNames({ "font-bold": showSubMenuItems || activePage })}`}>{title}</span>
      {/* </Link> */}
      {!!children && showSubMenuItems && (
        <div className="absolute -right-38 z-10 -top-2 border-2 border-primary rounded-r" onClick={() => setShowSubMenuItems(false)}>
          {children}
        </div>
      )}
      {/* </a> */}
    </Link>
  );
};

export default MenuItem;
