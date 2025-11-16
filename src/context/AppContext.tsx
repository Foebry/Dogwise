"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { BreedDto } from "@/common/api/dto/Breed";
import type { ServiceCategoryDto } from "@/common/api/dto/ServiceCategory";
import { translate } from "@/i18n";
import BannerProvider from "./BannerContext";
import ModalProvider from "./ModalContext";
import PageProvider from "./PageContext";

export const defaultApiResponse = { data: undefined, error: undefined };

type AppContextType = {
  breedOptions: { label: string; value: string }[];
  serviceCategoryOptions: { label: string; value: string }[];
};

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider: React.FC<{ children: any }> = ({ children }) => {
  const [breeds] = useState<BreedDto[]>([]);
  const [serviceCategories] = useState<ServiceCategoryDto[]>([]);

  const breedOptions = useMemo(() => {
    return breeds.map((breed) => ({ label: breed.name, value: breed.id }));
  }, [breeds]);

  const serviceCategoryOptions = useMemo(() => {
    return serviceCategories.map((category) => ({
      label: translate(`entities.services.category.${category.name.toLowerCase()}`),
      value: category.id,
    }));
  }, [serviceCategories]);

  return (
    <ModalProvider>
      <BannerProvider>
        <PageProvider>
          <AppContext.Provider value={{ breedOptions, serviceCategoryOptions }}>{children}</AppContext.Provider>
        </PageProvider>
      </BannerProvider>
    </ModalProvider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error(`No access to AppContext`);
  return context;
};
