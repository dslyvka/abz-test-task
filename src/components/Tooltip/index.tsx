// Libraries
import classNames from "classnames";

// Styles
import s from "./Tooltip.module.scss";

// Local interface
interface ITooltip {
  text: string;
}

// Tooltip component
export const Tooltip = ({ text }: ITooltip) => {
  return (
    <span className={classNames(s.tooltipText, "regularText")}>{text}</span>
  );
};
