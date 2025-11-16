/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
import type React from "react";
import Button from "@/components/buttons/Button";
import { CrossIcon } from "@/components/icons";
import style from "./style.module.css";
import type { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  children,
  acceptLabel = "Bevestigen",
  cancelLabel = "Annuleren",
  title,
  onAccept,
  onCancel,
  showFooter = true,
  showTitle = true,
  disabled = false,
}) => {
  return (
    <div className={style["modal-overlay"]} onClick={() => !showFooter && onCancel}>
      <div className={style["modal"]}>
        {showTitle && (
          <>
            <div className="flex items-center justify-between gap-5 px-5">
              <p className="font-semibold">{title}</p>
              <button type="button" className="cursor-pointer text-2xl text-red-900 font-semibold" onClick={onCancel}>
                <CrossIcon />
              </button>
            </div>
            <hr className="border-b-1 border-grey-200 mt-2" />
          </>
        )}

        {/* scrollable body */}
        <div className="flex-1 overflow-y-auto py-10 px-5">{children}</div>

        {showFooter && (
          <>
            <hr className="border-t-1 border-grey-200 mt-2" />
            <div className="flex items-center flex-row-reverse gap-3 px-5 py-2">
              <Button disabled={disabled} label={acceptLabel} onClick={onAccept} />
              <Button label={cancelLabel} onClick={onCancel} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
