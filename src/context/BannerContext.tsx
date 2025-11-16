import type { Dispatch, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";

type BannerContext = {
  bannerContent: string;
  setBannerContent: Dispatch<SetStateAction<string>>;
  isBannerActive: boolean;
  activateBanner: () => void;
  disableBanner: () => void;
};

export const BannerContext = createContext<BannerContext | null>(null);

const BannerProvider: React.FC<{ children: any }> = ({ children }) => {
  const [bannerContent, setBannerContent] = useState<string>("");
  const [isBannerActive, setIsBannerActive] = useState<boolean>(false);

  const activateBanner = () => setIsBannerActive(true);
  const disableBanner = () => setIsBannerActive(false);

  return (
    <BannerContext.Provider
      value={{
        bannerContent,
        setBannerContent,
        isBannerActive,
        activateBanner,
        disableBanner,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
};

export default BannerProvider;

export const useBannerContext = () => {
  const context = useContext(BannerContext);
  if (!context) throw new Error(`No access to BannerContext`);
  return context;
};
