import { classNames } from "@/shared/functions";
import type { CellProps } from "./types";
import { TextAlignment } from "./types";

const DynamicTableCell: React.FC<CellProps> = ({ row, column }) => {
  return (
    <td
      className={`px-2 py-4 ${classNames({
        [TextAlignment.LEFT]: column.TextAlign === TextAlignment.LEFT || !column.TextAlign,
        [TextAlignment.CENTER]: column.TextAlign === TextAlignment.CENTER,
        [TextAlignment.RIGHT]: column.TextAlign === TextAlignment.RIGHT,
      })}`}
    >
      {column.mapper ? column.mapper(row[column.key], row) : row[column.key]}
      <div
        className={`flex ${classNames({
          "justify-start": column.TextAlign === TextAlignment.LEFT || !column.TextAlign,
          "justify-center": column.TextAlign === TextAlignment.CENTER,
          "justify-end": column.TextAlign === TextAlignment.RIGHT,
        })}`}
      >
        {!!column.component && <column.component.component {...column.component.props(row)} />}
      </div>
    </td>
  );
};

export default DynamicTableCell;
