"use client";

import Banner from "@/components/banner/Banner";
import {
  CalendardayIcon,
  CalendarIcon,
  DatabaseIcon,
  EditIcon,
  HomeIcon,
  ListIcon,
  SittingdogIcon,
  StandingdogIcon,
  TrainingdogIcon,
  UserIcon,
  WebsiteIcon,
} from "@/components/icons";
import { useBannerContext } from "@/context/BannerContext";
import { translate } from "@/i18n";
import MenuItem from "./menu/MenuItem";
import MenuSection from "./menu/MenuSection";

const Dashboard: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children }) => {
  const { bannerContent, isBannerActive } = useBannerContext();

  return (
    <div>
      {isBannerActive && <Banner content={bannerContent} />}
      <div className="flex h-screen">
        <aside className="bg-primary px-2 pt-5 min-h-full" style={{ width: "12.5%" }}>
          <MenuSection title={translate("components.admin.dashboard.dashboard")} icon={<HomeIcon />} link={"/admin"} />
          <MenuSection title={translate("components.admin.dashboard.edit")} icon={<EditIcon />}>
            <MenuItem title={translate("components.admin.dashboard.notifications")} icon={<CalendarIcon />} link={"/admin/notifications"} />
            <MenuItem title={translate("components.admin.dashboard.website")} icon={<WebsiteIcon />} link={"/admin/edit"} />
            <MenuItem title={translate("components.admin.dashboard.trainingDays")} icon={<CalendardayIcon />} link={"/admin/edit/trainingdays"} />
          </MenuSection>
          <MenuSection title={translate("components.admin.dashboard.consult")} icon={<DatabaseIcon />}>
            <MenuItem title={translate("components.admin.dashboard.customers")} icon={<UserIcon />} link={"/admin/customers"} />
            <MenuItem title={translate("components.admin.dashboard.bookings")} icon={<ListIcon />} link={"/admin/subscriptions"} />
            <MenuItem title={translate("components.admin.dashboard.dogs")} icon={<SittingdogIcon />} link={"/admin/dogs"} />
            <MenuItem title={translate("components.admin.dashboard.breeds")} icon={<StandingdogIcon />} link={"/admin/breeds"} />
            <MenuItem
              title={translate("components.admin.dashboard.services")}
              icon={<TrainingdogIcon />}
              link="/admin/services"
              activeLinks={["/admin/services", "/admin/services/[id]"]}
            />
            {/* <MenuItem
              title={translate('components.admin.dashboard.pages')}
              link="/admin/pages"
              icon={<FaRegFileAlt />}
            /> */}
          </MenuSection>
        </aside>
        <section style={{ width: "87.5%" }} className="relative">
          <div className={`w-10/12 mx-auto py-10`}>
            <div className={`dashboard`}>{children}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
