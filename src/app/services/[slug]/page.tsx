"use client";

import { nanoid } from "nanoid";
import { useParams, useRouter } from "next/navigation";
import type { HTMLProps } from "react";
import Button, { ButtonVariant } from "@/components/buttons/Button";
import Card from "@/components/Card/-Card";
import GraduationIcon from "@/components/icons/-GraduationIcon";
import { Title1 } from "@/components/Typeography";
import { translate } from "@/i18n";
import { classNames } from "@/shared/functions";
import { details } from "./setupData";

const ServiceDetailPage: React.FC<HTMLProps<HTMLDivElement>> = () => {
  const { slug } = useParams();
  const router = useRouter();
  const shouldShowCapIcon = (lesson: string) => {
    return lesson.toLowerCase().startsWith("test:") || lesson.toLowerCase().includes("diploma");
  };

  return (
    <div className="py-10 px-2 md:px-2 md:w-3/5 mx-auto">
      <button type="button" className="underline text-tertiary" onClick={() => router.push("/home#services")}>
        {/** biome-ignore lint/a11y/useValidAnchor: <explanation> */}
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
          href="/home#services"
        >
          &lt; &nbsp;{translate("common.navigation.back", { to: translate("common.services") })}
        </a>
      </button>
      <Title1 className="font-semibold">{translate(`pages.services.slug.title.${(slug as string).toLowerCase()}`)}</Title1>
      <p className="text-lg text-gray-600">{translate(`pages.services.slug.subTitle.${(slug as string).toLowerCase()}`)}</p>
      <div className="mt-5 text-lg">{<p>{translate(`pages.services.slug.text.${(slug as string).toLowerCase()}`)}</p>}</div>
      <div className="mt-5">
        <Card title={translate("pages.services.slug.lessons")}>
          <div className="mt-5">
            {details[slug as string]?.blocks.map((block, index) => (
              <details
                key={block.title}
                className={`${classNames({ "mb-4 rounded-lg": true, "bg-gray-100 border-gray-100": index % 2 === 0, "bg-blue-50 border-blue-50": index % 2 !== 0 })}`}
              >
                <summary
                  className={`${classNames({
                    "p-4 border rounded-lg flex justify-between cursor-pointer": true,
                    "bg-gray-100 border-gray-100": index % 2 === 0,
                    "bg-blue-50 border-blue-50": index % 2 !== 0,
                  })}`}
                >
                  <span className="font-semibold">{block.title}</span>
                  <span className="[&[open]>summary>&]:hidden">+</span>
                </summary>
                <ul
                  className={`${classNames({
                    "ml-10 pb-4 justify-between cursor-pointer list-disc": true,
                  })}`}
                >
                  {block.lessons.map((lesson, idx) => (
                    <li key={nanoid()}>
                      <span className="md:flex gap-2 items-center">
                        {lesson}
                        {shouldShowCapIcon(lesson) && <GraduationIcon width={16} />}
                      </span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </Card>
      </div>
      <div className="my-10">
        <Card title={translate("pages.services.slug.subscribe.title")}>
          <div className="mt-5">
            <p className="text-lg mb-5">{translate("pages.services.slug.subscribe.manner")}</p>
            <div className="flex gap-4">
              <Button
                className="text-lg"
                variant={ButtonVariant.PRIMARY}
                label={translate("pages.services.slug.subscribe.email")}
                link={`mailto:info@dogwise.be?subject=inschrijving ${translate(`pages.services.slug.title.${(slug as string).toLowerCase()}`)}`}
              />
              <Button
                className="text-lg"
                variant={ButtonVariant.SECONDARY}
                label={translate("pages.services.slug.subscribe.whatsapp")}
                link={`https://wa.me/32456552678?text=Hallo%2C%20ik%20wil%20graag%20inschrijven%20voor%20${translate(`pages.services.slug.title.${(slug as string).toLowerCase().replace(/ /g, "%20")}`)}`}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
