import type React from "react";
import type { CSSProperties, HTMLProps } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { SpinnerBorder } from "./types";

const Spinner: React.FC<HTMLProps<HTMLDivElement> & { border?: SpinnerBorder }> = ({ label, size = 300, border = SpinnerBorder.DEFAULT }) => {
  const override: CSSProperties = {
    border: border,
  };
  return (
    <div className={`w-full mx-auto flex justify-center`}>
      <p>{label}</p>
      <div className="sweet-loading">
        <ClipLoader color={"#00918B"} cssOverride={override} loading={true} aria-label="Loading Spinner" size={size} speedMultiplier={0.6} />
      </div>
    </div>
  );
};

export default Spinner;
