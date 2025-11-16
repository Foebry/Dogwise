/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */

"use client";

import { usePathname } from "next/navigation";
import type React from "react";
import Banner from "@/components/banner/Banner";
import { Nav } from "@/components/nav/Nav";
import { useBannerContext } from "@/context/BannerContext";
import { useModalContext } from "@/context/ModalContext";
import { classNames } from "@/shared/functions";
import Footer from "./Footer";
import Hero from "./Hero";

const Page: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children }) => {
  const { bannerContent } = useBannerContext();
  const pathname = usePathname();
  const isHomePage = pathname === "/home";
  const { isModalActive, closeModal } = useModalContext();
  const shouldCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget && e.currentTarget.classList.contains("skeleton")) closeModal();
  };
  return (
    <div>
      {bannerContent.length > 0 && <Banner content={bannerContent} />}
      <Nav />
      {isHomePage && <Hero />}
      <section className="skeleton">
        <div className={`relative`}>
          <div className={`max-w-7xl  mx-auto md:flex md:px-5 skeleton ${classNames({ "blur-sm": isModalActive })}`} onClick={shouldCloseModal}>
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
