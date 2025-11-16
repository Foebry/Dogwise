import Card from "@/components/Card/-Card";
import { ConfusionIcon, HouseIcon, PawPrintIcon } from "@/components/icons";
import { translate as t } from "@/i18n";

const SpecializationCard: React.FC<{
  item: string;
}> = ({ item }) => {
  const icons: Record<string, React.ReactNode> = {
    puppyGuidance: <PawPrintIcon />,
    adolescentBehavior: <ConfusionIcon />,
    familyCounseling: <HouseIcon />,
  };
  return (
    <Card title={`${t(`pages.home.specializations.sections.${item}.title`)}`} icon={icons[item]} classes="text-center">
      <p>{`${t(`pages.home.specializations.sections.${item}.text`)}`}</p>
    </Card>
  );
};

export default SpecializationCard;
