import { ButtonWithIcon } from "../../ButtonWithIcon/ButtonWithIcon";

interface ArrowProps {
  iconSrc: string;
}

const ArrowButton = ({ iconSrc }: ArrowProps) => {
  return <ButtonWithIcon iconSrc={iconSrc} />;
};

export default ArrowButton;
