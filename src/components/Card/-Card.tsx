import { classNames } from "@/shared/functions";
import style from "./card.module.css";

const Card: React.FC<React.HTMLProps<HTMLDivElement> & { icon?: any; classes?: string }> = ({ title, icon, children, classes, id }) => {
  return (
    <div className={`p-6 ${classes} ${style.card}`} id={id}>
      {!!title && (
        <h3
          className={`text-xl font-bold text-black relative ${classNames({
            "left-10": !classes?.includes("text-center"),
          })}`}
        >
          <span className="relative">
            <span className="absolute -left-10">{icon}</span>
          </span>
          {title}
        </h3>
      )}
      <div>{!!children && children}</div>
    </div>
  );
};

export default Card;
