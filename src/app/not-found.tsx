"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { HTMLProps } from "react";
import { Title2, Title3 } from "@/components/Typeography";

const NotFoundPage: React.FC<HTMLProps<HTMLDivElement>> = () => {
  const router = useRouter();
  return (
    <div className="flex gap-20 justify-center py-72 items-center">
      <div>
        <Image src="https://res.cloudinary.com/dv7gjzlsa/image/upload/v1659613403/De-Gallo-Hoeve/content/logo-r_vwnpdy.png" width={204} height={204} alt="Company Logo Togo" />
      </div>
      <div>
        <Title2 className="text-primary">Oeps, deze pagina bestaat niet</Title2>
        <Title3>
          Klik{" "}
          <button type="button" className="cursor-pointer text-primary underline" onClick={() => router.back()}>
            hier
          </button>{" "}
          om terug te keren naar de vorige pagina
        </Title3>
      </div>
    </div>
  );
};

export default NotFoundPage;
