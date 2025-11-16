import AddRowIcon from "@/components/icons/-AddRowIcon";
import type { AddRowButtonProps } from "./types";

const AddRowButton: React.FC<AddRowButtonProps> = ({ label, onClick }) => {
  return (
    <div className="flex gap-5 justify-center items-center text-color-primary hover:cursor-pointer font-semibold text-xl">
      <AddRowIcon />
      <button type="button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default AddRowButton;
