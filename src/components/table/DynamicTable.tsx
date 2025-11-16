"use client";

import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import Spinner from "@/components/loader/Spinner";
import { translate } from "@/i18n";
import { classNames } from "@/shared/functions";
import DynamicTableCell from "./DynamicTableCell";
import DynamicTableRow from "./DynamicTableRow";
import AddRowButton from "./subcomponents/AddRowButton";
import type { TableProps } from "./types";
import { TextAlignment } from "./types";

const DynamicTable: React.FC<TableProps> = ({
  columns,
  data,
  isLoading = false,
  addRowButton,
  interactive = false,
  basePath = "",
  noDataMessage = translate("components.table.noData"),
  className = "",
}) => {
  const router = useRouter();
  const hasData = data && !!data.length;
  const onClick = (row: any) => {
    if (!interactive) return;
    router.push(`${basePath}/${row.id}`);
  };
  return (
    <table className={`w-full rounded-t-xl border-primary border-2 ${className}`}>
      <thead>
        <tr className="bg-primary rounded-t-lg text-white">
          {columns.map((column) => (
            <th
              className={`p-2 ${classNames({
                [TextAlignment.LEFT]: column.headerAlign === TextAlignment.LEFT || !column.headerAlign,
                [TextAlignment.CENTER]: column.headerAlign === TextAlignment.CENTER,
                [TextAlignment.RIGHT]: column.headerAlign === TextAlignment.RIGHT,
              })}`}
              key={column.key}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading && (
          <tr className="mx-auto">
            <td colSpan={columns.length} className="text-center py-4">
              <Spinner size={200} />
            </td>
          </tr>
        )}
        {!isLoading && (
          <>
            {!hasData && (
              <tr>
                <td colSpan={columns.length} className="text-center py-4">
                  {noDataMessage}
                </td>
              </tr>
            )}
            {hasData &&
              data.map((row, idx) => (
                <DynamicTableRow
                  key={`${row.id ?? nanoid(4)}`}
                  row={row}
                  className={classNames({
                    "bg-green-100 bg-opacity-20": idx % 2 !== 1,
                    "hover:cursor-pointer": interactive,
                  })}
                  onClick={() => onClick(row)}
                >
                  {columns.map((column) => (
                    <DynamicTableCell key={`${column.key}_${nanoid(4)}`} row={row} column={column}></DynamicTableCell>
                  ))}
                </DynamicTableRow>
              ))}
            {!!addRowButton && (
              <tr>
                <td colSpan={columns.length} className="text-center py-4">
                  <AddRowButton label={addRowButton.label} onClick={addRowButton.onClick} />
                </td>
              </tr>
            )}
          </>
        )}
      </tbody>
    </table>
  );
};

export default DynamicTable;
