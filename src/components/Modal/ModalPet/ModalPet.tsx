import s from "./ModalPet.module.scss";
import { PetItem } from "@/types/types";
import { buildPetInfo } from "@/utilities/buildPetInfo";
import { Button } from "@/components/Button/Button";
import LikeIcon from "@/assets/icons/heart.svg?react";

interface ModalPetProps {
  props: PetItem;
  handleOpenModal: () => void;
}

const ModalPet = ({ props, handleOpenModal }: ModalPetProps) => {
  const {
    title,
    name,
    sex,
    birthday,
    category,
    comment,
    price,
    popularity,
    imgURL,
  } = props;

  const petCardInfo = buildPetInfo({
    name,
    birthday,
    category,
    sex,
  });
  return (
    <div className={s.modal}>
      <div className={s.imageContainer}>
        <img src={imgURL} alt={title} />
        <p className={s.category}>{category}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p className={s.title}>{title}</p>
        <p className={s.title}>{popularity}</p>
      </div>
      <div className={s.listRow}>
        {petCardInfo.map(({ label, value }) => (
          <div className="flex flex-col items-center">
            <p className={s.listRowLabel}>{label}</p>
            <p className={s.subtitle}>{value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <p className={s.comment}>{comment}</p>

        <p className={s.price}>{price !== undefined && `$${price}`}</p>
        <div className="flex flex-row w-full justify-between pt-3">
          <Button
            className={s.learnButton}
            type="button"
            label="Add to"
            variant="primary"
            onClick={handleOpenModal}
            icon={<LikeIcon />}
            iconPosition="right"
          />
          <Button
            className={s.likeButton}
            type="button"
            variant="secondary"
            label="Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalPet;
