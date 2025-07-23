import clsx from "clsx";
import s from "./DropDownItem.module.scss";

interface DropDownItemProps<T> {
  value: string;
  className?: string;
  onSelectValue?: (value: string) => void;
}

function DropDownItem<T>({ className, value }: DropDownItemProps<T>) {
  return <div className={clsx(s.item, className)}>{value}</div>;
}

export default DropDownItem;
