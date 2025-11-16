import { useRouter } from "next/navigation";
import type { HTMLProps } from "react";
import Button, { ButtonVariant } from "@/components/buttons/Button";
import Label from "@/components/label/Label";

const Hero: React.FC<HTMLProps<HTMLDivElement>> = () => {
  const router = useRouter();
  return (
    <div className="px-5 py-2 lg:50vh lg:px-52 lg:py-20" style={{ backgroundColor: "#106c64" }}>
      <div className="lg:w-1/2 flex gap-5 py-4">
        <Label className="opacity-50">Kleine groepen (max. 5)</Label>
        <Label className="opacity-50">Privétraining</Label>
        <Label className="opacity-50">Positieve methode</Label>
      </div>
      <div className="lg:w-1/2">
        <h1 className="font-black text-white text-5xl">Meer Rust, meer plezier met je hond</h1>
        <p className="py-4 text-white text-lg font-semibold w-3/4">
          Gespecialiseerd in <span className="font-bold">puppybegeleiding</span>, <span className="font-bold">pubergedrag</span> en{" "}
          <span className="font-bold">gezinsbegeleiding</span> - in kleine groepen of privé.
        </p>
      </div>
      <div className="md:w-1/2 flex gap-5">
        <Button variant={ButtonVariant.PRIMARY} label="Bekijk trainingen" className="text-lg" link="/home#services" onClick={() => router.push("/home#services")} />
        <Button
          variant={ButtonVariant.SECONDARY}
          label="Plan gratis intake"
          className="text-lg"
          link="https://wa.me/32456552678?text=Hallo,%20ik%20wil%20graag%20een%20intake%20plannen"
        />
      </div>
    </div>
  );
};

export default Hero;
