import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { usePageGuards } from "./guards";

export type PageConfig = {
  page: string;
  title: string;
  meta: { name: string; content: string; key: string }[];
  guards: string[];
};

const config: PageConfig[] = [
  {
    page: "/home",
    title: "Dogwise - hondentrainer Hulshout",
    guards: [],
    meta: [
      {
        name: "description",
        content:
          "Honden trainer Hulshout en omstreken. Training op basis commando's wandelen aan de leiband en nog veel meer.",
        key: "description-index",
      },
    ],
  },
  {
    page: "/login",
    title: "Dogwise - login",
    guards: [],
    meta: [
      {
        name: "description",
        content:
          "Honden trainer Hulshout en omstreken. Login om toegang te krijgen tot uw accout.",
        key: "description login",
      },
    ],
  },
  {
    page: "/register",
    title: "Dogwise - Registratie",
    guards: [],
    meta: [
      {
        name: "description",
        content:
          "Honden trainer Hulshout en omstreken. Maak nu een account aan door enkele persoonlijke gegevens in te vullen, gegevens van uw hond(en). U ontvangt een email met registratie bevestiging, eenmaal bevestigt kan u nieuwe trainingen boeken.",
        key: "description registration",
      },
    ],
  },
  {
    page: "/bookings/[id]",
    title: "Dogwise - booking",
    guards: [],
    meta: [
      {
        name: "description",
        content:
          "Maak nu een nieuwe afspraak. Selecteer de datum en het tijdstip waarop u een training wil boeken. Selecter vervolgens voor welke hond u deze training wil boeken. U ontvangt een mail ter bevestiging van uw inschrijving.",
        key: "booking",
      },
    ],
  },
  {
    page: "/404",
    title: "Dogwise - 404",
    guards: [],
    meta: [],
  },
  {
    page: "/error",
    title: "Dogwise - Oeps...",
    guards: [],
    meta: [],
  },
  {
    page: "/bookings/checkout/success/[id]",
    title: "Dogwise - checkout success",
    guards: [],
    meta: [],
  },
  {
    page: "/[slug]",
    title: "Dogwise",
    guards: [],
    meta: [],
  },
  {
    page: "/[slug]/[sub-slug]",
    title: "Dogwise",
    guards: [],
    meta: [],
  },
  {
    page: "/dogs",
    title: "Dogwise - honden",
    guards: [],
    meta: [],
  },
  {
    page: "/dogs/[slug]",
    title: "Dogwise - hond",
    guards: [],
    meta: [],
  },
  {
    page: "/services",
    title: "Dogwise - diensten",
    guards: [],
    meta: [],
  },
  {
    page: "/services/[slug]",
    title: "Dogwise - dienst",
    guards: [],
    meta: [],
  },
  {
    page: "/admin",
    title: "Dogwise - Admin",
    guards: [],
    meta: [],
  },
  {
    page: "/admin/bookings",
    title: "Dogwise - Admin",
    guards: [],
    meta: [],
  },
  {
    page: "/admin/edit",
    title: "Dogwise - Admin",
    guards: [],
    meta: [],
  },
  {
    page: "/admin/edit/trainingdays",
    title: "Dogwise - Admin",
    guards: [],
    meta: [],
  },
  {
    page: "/admin/edit/trainingtijden",
    title: "Dogwise - Admin",
    guards: [],
    meta: [],
  },
  {
    page: "/admin/dogs",
    title: "Dogwise - Admin",
    guards: [],
    meta: [],
  },
  {
    page: "/admin/customers",
    title: "Dogwise - Admin",
    guards: [],
    meta: [],
  },
  {
    page: "/admin/customers/[slug]",
    title: "Dogwise - Admin",
    guards: [],
    meta: [],
  },
  {
    page: "/admin/subscriptions",
    title: "Dogwise - Admin",
    guards: [],
    meta: [],
  },
  {
    page: "/admin/subscriptions/[slug]",
    title: "Dogwise - Admin",
    guards: [],
    meta: [],
  },
  {
    page: "/admin/breeds",
    title: "Dogwise - Admin",
    guards: [],
    meta: [],
  },
  {
    page: "/admin/notifications",
    title: "Dogwise - Admin",
    guards: [],
    meta: [],
  },
  {
    page: "/admin/notifications/[slug]",
    title: "Dogwise - Admin",
    guards: [],
    meta: [],
  },
  {
    page: "/admin/services",
    title: "Dogwise - Admin",
    guards: ["admin"],
    meta: [],
  },
  {
    page: "/admin/services/[id]",
    title: "Dogwise - Admin",
    guards: ["admin"],
    meta: [],
  },
  {
    page: "/admin/pages",
    title: "Dogwise - Admin",
    guards: ["admin"],
    meta: [],
  },
  {
    page: "/admin/pages/[slug]",
    title: "Dogwise - Admin",
    guards: ["admin"],
    meta: [],
  },
];

const usePageConfig = (): PageConfig => {
  const pathname = usePathname();
  const sluggedPath = pathname.replace(/\/[^/]+$/, "/[slug]");
  const segments = useSelectedLayoutSegments();
  const { evaluateGuard } = usePageGuards();
  const emptyConfig: PageConfig = { page: "", title: "", meta: [], guards: [] };
  const pageConfig =
    config.find(
      (item) => item.page === pathname || item.page === sluggedPath
    ) ?? emptyConfig;

  for (const guard of pageConfig.guards) {
    evaluateGuard(guard);
  }

  return pageConfig;
};

export default usePageConfig;
