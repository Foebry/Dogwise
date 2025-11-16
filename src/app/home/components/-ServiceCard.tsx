"use client";

import { useRouter } from "next/navigation";
import Button, { ButtonVariant } from "@/components/buttons/Button";
import Card from "@/components/Card/-Card";
import { BoneIcon, ConfusionIcon, Dog1Icon, Dog2Icon, PawPrintIcon, PinIcon } from "@/components/icons";
import { translate as t } from "@/i18n";

const ServiceCard: React.FC<{ item: string }> = ({ item }) => {
  const router = useRouter();
  const navigateTo = (service: string) => {
    router.push(`/services/${service}`);
  };
  const icons: Record<string, React.ReactNode> = {
    puppy1: <PawPrintIcon />,
    puppy2: <BoneIcon />,
    adolescense: <ConfusionIcon />,
    junior: <Dog1Icon />,
    adult: <Dog2Icon />,
    private: <PinIcon className="rotate-90" />,
  };
  return (
    <Card title={t(`pages.home.services.${item}.title`)} icon={icons[item]}>
      <div className="flex items-center justify-between md:block">
        <div>
          <p className="text-sm">{`${t(`pages.home.services.${item}.subTitle`)}`}</p>
          <p className="text-sm py-2">{`${t(`pages.home.services.${item}.text`)}`}</p>
        </div>
        <Button
          variant={ButtonVariant.SECONDARY}
          className="py-3 px-4 mt-4 bg-primary text-white font-semibold rounded-xl"
          label={t("common.moreInfo")}
          link={`/services/${item}`}
          onClick={() => navigateTo(item)}
        />
      </div>
    </Card>
  );
};

export default ServiceCard;
