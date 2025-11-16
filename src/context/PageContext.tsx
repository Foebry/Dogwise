import { createContext, useContext, useEffect, useState } from "react";

type PageContext = {
  subTitle: string;
  updateSubTitle: (title?: string) => void;
};

export const PageContext = createContext<PageContext | null>(null);

const PageProvider: React.FC<{ children: any }> = ({ children }) => {
  const [subTitle, setSubTitle] = useState<string>("");

  const updateSubTitle = (title = "") => setSubTitle(title);

  useEffect(() => {
    return () => setSubTitle("");
  }, []);

  return <PageContext.Provider value={{ subTitle, updateSubTitle }}>{children}</PageContext.Provider>;
};

export default PageProvider;

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) throw new Error(`No access to PageContext`);
  return context;
};
