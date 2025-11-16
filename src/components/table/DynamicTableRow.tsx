import { classNames } from "@/shared/functions";
import type { RowProps } from "./types";

const DynamicTableRow: React.FC<RowProps> = ({ children, className: styles, onClick }) => {
  const inheritedStyles = styles || "";
  return (
    <tr className={`px-2 py-6 ${classNames({ [inheritedStyles]: !!styles })}`} onClick={onClick}>
      {children}
    </tr>
  );
};

export default DynamicTableRow;
