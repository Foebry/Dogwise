"use client";

import Button, { ButtonVariant } from "@/components/buttons/Button";
import Card from "@/components/Card/-Card";
import { BoneIcon, ConfusionIcon, Dog1Icon, Dog2Icon, FacebookIcon, MailIcon, PawPrintIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { Body, Title2, Title3 } from "@/components/Typeography";
import DynamicTable from "@/components/table/DynamicTable";
import { TextAlignment } from "@/components/table/types";
import { translate as t } from "@/i18n/";
import ServiceCard from "./components/-ServiceCard";
import SpecializationCard from "./components/-SpecializationCard";

type PriceItem = {
  training: string;
  price: number;
  bulk: number;
};

export default function Home() {
  const specializations = [{ item: "puppyGuidance" }, { item: "adolescentBehavior" }, { item: "familyCounseling" }];
  const services = [{ item: "puppy1" }, { item: "puppy2" }, { item: "adolescense" }, { item: "junior" }, { item: "adult" }, { item: "private" }];
  const groupPriceList: PriceItem[] = [
    { training: "Puppy klas 1", price: 10, bulk: 40 },
    { training: "Puppy klas 2", price: 15, bulk: 60 },
    { training: "Puberklas", price: 20, bulk: 80 },
    { training: "Juniorklas", price: 25, bulk: 100 },
    { training: "Volwassenenklas", price: 30, bulk: 120 },
  ];
  const privatePriceList: PriceItem[] = [
    { training: "Puppy klas 1", price: 20, bulk: 80 },
    { training: "Puppy klas 2", price: 25, bulk: 100 },
    { training: "Puberklas", price: 30, bulk: 120 },
    { training: "Juniorklas", price: 35, bulk: 140 },
    { training: "Volwassenenklas", price: 40, bulk: 160 },
  ];
  const privateCustomerPriceList: PriceItem[] = [{ training: "Privé training alle leeftijden", price: 65, bulk: 260 }];
  const travelcost: number = 0.35;
  const freeTravelDistance: number = 30;
  const feedbackArray: { text: string; author: string; id: string }[] = [
    { text: "Trainingen hebben nut en zijn leerzaam", author: "Frank", id: Math.random().toString().substring(2) },
    { text: "Seppe heeft mij al vrij goede tips gegeven. Het is niet gemakkelijk om verlatingsangst weg te krijgen.", author: "Els", id: Math.random().toString().substring(2) },
    {
      text: "ik merk dat mijn hond geëvolueert is sinds dat ik lessen volg. Mijn vragen worden altijd duidelijk beantwoord en kortom ben ik zeer tevreden van de lessen.",
      author: "Nina",
      id: Math.random().toString().substring(2),
    },
  ];

  return (
    <div className="mx-auto">
      {/* Specializations */}
      <div className="py-14 px-2 md:px-0" id="specializations">
        <Title2 className="text-center">{t("pages.home.specializations.title")}</Title2>
        <Body className="text-center">{t("pages.home.specializations.text")}</Body>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {specializations.map((spec) => (
            <SpecializationCard key={spec.item} item={spec.item} />
          ))}
        </div>
      </div>

      {/* About us */}
      <div className="w-full mx-auto py-14 md:w-3/4" id="about-us">
        <Card>
          <Title2 className="text-left">{t("pages.home.aboutUs.title")}</Title2>
          <p className="py-2">
            {t("pages.home.aboutUs.paragraph1.text1")} <span className="font-semibold">Seppe</span> {t("pages.home.aboutUs.paragraph1.text2")}
          </p>
          <p className="py-2">{t("pages.home.aboutUs.paragraph2")}</p>
        </Card>
      </div>

      {/*<Services /> */}
      <div className="py-14" id="services">
        <Title2 className="text-center">{t("pages.home.services.title")}</Title2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {services.map((service) => (
            <ServiceCard key={service.item} item={service.item} />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center"></div>
      {/* Schedule */}
      <div className="md:w-3/4 md:mx-auto py-14" id="schedule">
        <Title2 className="text-center">{t("pages.home.schedule.title")}</Title2>
        <Card classes="mb-5 sm:mb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
            <div>
              <Title3>{t("pages.home.schedule.group.title")}</Title3>
              <div className="mt-4">
                <p className="flex items-center gap-2">
                  <PawPrintIcon width={15} /> Puppy1 -- <span className="font-semibold">woe 18:00 - 19:00</span>
                </p>
                <p className="flex items-center gap-2">
                  <BoneIcon width={15} /> Puppy2 -- <span className="font-semibold">za 10:00 - 11:00</span>
                </p>
                <p className="flex items-center gap-2">
                  <ConfusionIcon width={15} /> Puber -- <span className="font-semibold">woe 19:00 - 20:00</span>
                </p>
                <p className="flex items-center gap-2">
                  <Dog1Icon width={15} /> Juniorklas -- <span className="font-semibold">vr 18:00 - 19:00</span>
                </p>
                <p className="flex items-center gap-2">
                  <Dog2Icon width={15} /> Volwassenen -- <span className="font-semibold">za 11:00 - 12:00</span>
                </p>
              </div>
            </div>
            <div className="hidden sm:block">
              <Title3>{t("pages.home.schedule.private.title")}</Title3>
              <div className="mt-4">
                <p className="flex items-center gap-2">
                  <PinIcon />
                  Op afspraak -- <span className="font-semibold">ma, di, do, vr 17:00 - 22:00</span>
                </p>
                <p className="flex items-center gap-2">
                  <PinIcon />
                  Op afspraak -- <span className="font-semibold">woe 10:00 - 11:00 &amp; 15:00 - 17:00</span>
                </p>
                <p className="flex items-center gap-2">
                  <PinIcon />
                  Op afspraak -- <span className="font-semibold">za 10:00 - 15:00</span>
                </p>
                <p className="flex items-center gap-2">
                  <PinIcon />
                  Op afspraak -- <span className="font-semibold">zo 10:00 - 14:00</span>
                </p>
              </div>
            </div>
          </div>
        </Card>
        <div className="block sm:hidden">
          <Card>
            <div>
              <Title3>{t("pages.home.schedule.private.title")}</Title3>
              <div className="mt-4">
                <p className="flex items-center gap-2">
                  <PinIcon />
                  Op afspraak -- <span className="font-semibold">ma, di, do, vr 17:00 - 22:00</span>
                </p>
                <p className="flex items-center gap-2">
                  <PinIcon />
                  Op afspraak -- <span className="font-semibold">woe 10:00 - 11:00 &amp; 15:00 - 17:00</span>
                </p>
                <p className="flex items-center gap-2">
                  <PinIcon />
                  Op afspraak -- <span className="font-semibold">za 10:00 - 15:00</span>
                </p>
                <p className="flex items-center gap-2">
                  <PinIcon />
                  Op afspraak -- <span className="font-semibold">zo 10:00 - 14:00</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Pricelist */}
      <div className="py-14" id="pricelist">
        <Title2 className="text-center">{t("pages.home.pricelist.title")}</Title2>
        <div className="mt-8 md:flex gap-5">
          <Card classes="text-center px-0 md:w-1/2 mb-8 md:mb-0" icon={<PawPrintIcon />} title={t("pages.home.pricelist.group.title")}>
            <div className="mt-4 px-0">
              <DynamicTable
                className="border-none"
                columns={[
                  {
                    key: "training",
                    label: "Training",
                    headerAlign: TextAlignment.CENTER,
                    TextAlign: TextAlignment.CENTER,
                  },
                  {
                    key: "price",
                    label: "Per Sessie",
                    headerAlign: TextAlignment.CENTER,
                    TextAlign: TextAlignment.CENTER,
                    mapper: (value) => `€ ${value}`,
                  },
                  {
                    key: "bulk",
                    label: "5 lessen / blok",
                    headerAlign: TextAlignment.CENTER,
                    TextAlign: TextAlignment.CENTER,
                    mapper: (value) => `€ ${value}`,
                  },
                ]}
                data={groupPriceList}
              />
            </div>
          </Card>
          <Card classes="text-center px-0 md:w-1/2" title={t("pages.home.pricelist.private.title")} icon={<PinIcon />}>
            <div className="mt-4 px-0">
              <DynamicTable
                className="border-none"
                columns={[
                  {
                    key: "training",
                    label: "Training",
                    headerAlign: TextAlignment.CENTER,
                    TextAlign: TextAlignment.CENTER,
                  },
                  {
                    key: "price",
                    label: "Per Sessie",
                    headerAlign: TextAlignment.CENTER,
                    TextAlign: TextAlignment.CENTER,
                    mapper: (value) => `€ ${value}`,
                  },
                  {
                    key: "bulk",
                    label: "5 lessen / blok",
                    headerAlign: TextAlignment.CENTER,
                    TextAlign: TextAlignment.CENTER,
                    mapper: (value) => `€ ${value}`,
                  },
                ]}
                data={privatePriceList}
              />
            </div>
          </Card>
        </div>
        <div className="mt-8">
          <Card title={t("pages.home.pricelist.privateCustomer.title")} icon={<PinIcon />} classes="text-center">
            <div className="mt-4">
              <DynamicTable
                className="border-none"
                columns={[
                  {
                    key: "training",
                    label: "Training",
                    headerAlign: TextAlignment.CENTER,
                    TextAlign: TextAlignment.CENTER,
                  },
                  {
                    key: "price",
                    label: "Per Sessie",
                    headerAlign: TextAlignment.CENTER,
                    TextAlign: TextAlignment.CENTER,
                    mapper: (value) => `€ ${value}`,
                  },
                  {
                    key: "bulk",
                    label: "5 lessen / blok",
                    headerAlign: TextAlignment.CENTER,
                    TextAlign: TextAlignment.CENTER,
                    mapper: (value) => `€ ${value}`,
                  },
                ]}
                data={privateCustomerPriceList}
              />
              <p className="mt-4 font-semibold">
                {t("pages.home.pricelist.privateCustomer.disclaimer", { radius: freeTravelDistance.toString(), travelcost: travelcost.toString() })}
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Intake */}
      <div className="md:w-3/4 md:mx-auto py-14" id="intake">
        <Card title={t("pages.home.intake.title")} classes="text-center">
          <p className="py-5">{t("pages.home.intake.text")}</p>
          <div className="flex justify-center gap-4">
            <Button label={t("pages.home.intake.button.mail")} variant={ButtonVariant.PRIMARY} link="mailto:info@dogwise.be?subject=Gratis intake aanvragen" />
            <Button
              label={t("pages.home.intake.button.whatsapp")}
              variant={ButtonVariant.SECONDARY}
              link="https://wa.me/32456552678?text=Hallo,%20ik%20wil%20graag%20een%20intake%20plannen"
            />
            <Button label={t("pages.home.intake.button.call")} variant={ButtonVariant.SECONDARY} link="tel:+32456552678" />
          </div>
        </Card>
      </div>

      {/* Contact */}
      <div className="py-14 md:flex gap-5">
        <Card title={t("pages.home.contact.title")} classes="text-center md:w-1/2 mb-8 sm:mb-0" id="contact">
          <div className="gap-5 md:flex justify-between mt-10">
            <div>
              <p className="font-semibold text-left mb-5">DogWise</p>
              <div className="flex justify-between md:block">
                <div>
                  <p className="mb-3">
                    <a className="flex items-center gap-2" href="tel:+32456552678">
                      <span className="text-red-900">
                        <PhoneIcon width={14} />
                      </span>
                      <span>+32 456 55 26 78</span>
                    </a>
                  </p>
                  <p className="mb-3">
                    <a className="flex items-center gap-2" href="mailto:info@dogwise.be">
                      <span>
                        <MailIcon width={14} />
                      </span>
                      <span>info@dogwise.be</span>
                    </a>
                  </p>
                  <p className="mb-3">
                    <a className="flex items-center gap-2" href="https://facebook.com/groups/1381434199581172/" target="_blank" rel="noreferrer">
                      <span className="text-blue-500">
                        <FacebookIcon width={14} />
                      </span>
                      <span>Dogwise</span>
                    </a>
                  </p>
                </div>
                <div className="py-5">
                  <Button variant={ButtonVariant.PRIMARY} label={t("pages.home.contact.title")} link="mailto:info@degallohoeve.be" />
                </div>
              </div>
            </div>
            <div className="flex justify-center md:block">
              <iframe
                title="Google Maps Brussels"
                className="aspect-square rounded-xl h-64 w-64"
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.4210947409773!2d4.712706276710763!3d51.07383397171362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1582b4e0f5a3d%3A0x660e3300f9953b35!2sProf.%20Verbiststraat%204%2C%202222%20Heist-op-den-Berg!5e0!3m2!1sen!2sbe!4v1731700000000"
              ></iframe>
            </div>
          </div>
        </Card>

        {/* Reviews */}
        <Card classes="md:w-1/2 text-center" title={t("pages.home.reviews.title")} id="reviews">
          <div className="mt-10">
            {feedbackArray.map(({ id, text, author }) => (
              <p className="italic mb-3" key={id}>
                &quot;{text}&quot; -- {author}
              </p>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
