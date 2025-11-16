import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { ModalType } from "@/components/modal/types";

export type ModalData = {
  caption?: string;
  type: ModalType;
  content?: ReactNode;
  callbackData?: any;
  confirmLabel?: string;
  cancelLabel?: string;
};

type ModalContext = {
  callback: ((confirmed: boolean) => any) | undefined;
  updateModal: (data: ModalData, callBack?: (param: any) => any) => void;
  modalData: ModalData;
  openModal: () => void;
  closeModal: () => void;
  isModalActive: boolean;
};

export const ModalContext = createContext<ModalContext | null>(null);

const ModalProvider: React.FC<{ children: any }> = ({ children }) => {
  const [isModalActive, setModalActive] = useState<boolean>(false);
  const [callback, setCallback] = useState<(confirmed: boolean) => any>();
  const [modalData, setModalData] = useState<ModalData>({ type: ModalType.DEFAULT });

  const updateModal = (data: ModalData, cb?: (confirmed: boolean) => any) => {
    setModalData(data);
    if (cb) setCallback(cb);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const openModal = () => setModalActive(true);

  return (
    <ModalContext.Provider
      value={{
        callback,
        updateModal,
        modalData,
        openModal,
        closeModal,
        isModalActive,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error(`No access to ModalContext`);
  return context;
};

export default ModalProvider;
