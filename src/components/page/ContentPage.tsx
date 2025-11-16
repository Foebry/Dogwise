"use client";

import Dashboard from "@/components/layout/admin/dashboard";
import Page from "@/components/layout/page/Page";
import usePageConfig from "./usePageConfig";

const ContentPage: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children }) => {
  const { page } = usePageConfig();
  const isAdminPage = page.startsWith("/admin");

  return (
    <div>
      {isAdminPage && <Dashboard>{children}</Dashboard>}
      {!isAdminPage && <Page>{children}</Page>}
    </div>
  );
};

export default ContentPage;
