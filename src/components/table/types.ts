export type Column = {
  key: string;
  label: string;
  headerAlign?: TextAlignment;
  TextAlign?: TextAlignment;
  mapper?: (value: any, row: any) => any;
  component?: {
    component: React.FunctionComponent<any>;
    props: (row: any) => Record<string, any>;
  };
};

export enum TextAlignment {
  LEFT = "text-left",
  CENTER = "text-center",
  RIGHT = "text-right",
}

export type TableProps = {
  className?: string;
  columns: Column[];
  data: any[];
  isLoading?: boolean;
  interactive?: boolean;
  basePath?: string;
  noDataMessage?: string;
  addRowButton?: {
    label: string;
    onClick: () => void;
  };
};

export type RowProps = {
  children?: React.ReactNode;
  className?: string;
  row: any;
  onClick?: () => void;
};

export type CellProps = {
  row: any;
  column: Column;
};
