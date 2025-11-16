/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import Button, { ButtonVariant } from "@/components/buttons/Button";
import NewBaseModal from "@/components/modal/BaseModal";
import NavLink from "./NavLink";

export const Nav: React.FC = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const navigateTo = (path: string) => {
    setShowModal(false);
    router.push(path);
  };

  return (
    <div className="hidden md:relative sticky top-0 bg-white w-full shadow h-16 z-20 md:mb-0 md:block">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4 hover:cursor-pointer" onClick={() => router.push("/home")}>
          <div className="w-16">
            <Image
              src="https://res.cloudinary.com/dv7gjzlsa/image/upload/v1659613403/De-Gallo-Hoeve/content/logo-r_vwnpdy.png"
              width={64}
              height={64}
              alt="degallohoeve training privé hond honden hondentraining hondtrainer hondentrainer"
            />
          </div>
          <div className="text-lg uppercase font-medium">
            <p className="font-semibold text-lg">DogWise</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <NavLink href="/home#specializations" label="Specialisaties" />
          <NavLink href="/home#about-us" label="Over ons" />
          <NavLink href="/home#services" label="Trainingen" />
          <NavLink href="/home#schedule" label="Rooster & Uren" />
          <NavLink href="/home#pricelist" label="Tarieven" />
          <NavLink href="/home#contact" label="Contact" />
          <NavLink href="/home#reviews" label="Reviews" />
          <Button variant={ButtonVariant.PRIMARY} label="Inschrijven" link="mailto:info@dogwise.be?subject=Inschrijven" />
        </div>
      </div>
      {showModal && (
        <NewBaseModal title={"Heeft u reeds een account?"} onCancel={() => setShowModal(false)} onAccept={async () => alert("Account aangemaakt!")} showFooter={false}>
          <div>
            <div className="mb-10">
              <p>Heeft u reeds een account? ga verder met jouw bestaand account.</p>
              <p>Nog geen account? Geen zorgen, u kan zonder account verder gaan.</p>
            </div>
            <div className="flex gap-4">
              <Button variant={ButtonVariant.PRIMARY} label="Verdergaan met bestaand account" onClick={() => navigateTo("/login")} />
              <Button variant={ButtonVariant.SECONDARY} label="Doorgaan zonder account" onClick={() => navigateTo("/bookings")} />
            </div>
          </div>
        </NewBaseModal>
      )}
    </div>
  );
};
