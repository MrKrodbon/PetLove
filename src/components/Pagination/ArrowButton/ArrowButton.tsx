import { ButtonWithIcon } from "../../ButtonWithIcon/ButtonWithIcon";

interface ArrowProps {
  iconSrc: string;
  onClick?: () => void;
}

const ArrowButton = ({ iconSrc, onClick }: ArrowProps) => {
  return <ButtonWithIcon iconSrc={iconSrc} onClick={onClick} />;
};

export default ArrowButton;
