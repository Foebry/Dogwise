export type AddRowButtonProps = Omit<
  React.HTMLProps<HTMLButtonElement>,
  "onClick"
> & {
  onClick: () => void;
};
