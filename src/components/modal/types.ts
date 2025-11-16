import type { HTMLProps } from "react";

export enum ModalType {
  ERROR = "error",
  DEFAULT = "default",
}

export type DefaultModalProps = {
  close: () => void;
  confirm: (data: any) => Promise<void>;
};

export type ModalProps = HTMLProps<HTMLDivElement> & {
  acceptLabel?: string;
  cancelLabel?: string;
  disabled?: boolean;
  showFooter?: boolean;
  showTitle?: boolean;
  title: string;
  onAccept: (data: any) => Promise<void>;
  onCancel: () => void;
};
