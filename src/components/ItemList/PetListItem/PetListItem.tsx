import { PetItem } from "@/types/types";
import s from "./PetListItem.module.scss";
import { Button } from "@/components/Button/Button";
import HeartIcon from "@/assets/icons/heart.svg?react";
import DogEmoji from "@/assets/icons/dogEmoji.png";
import { buildPetInfo } from "@/utilities/buildPetInfo";
import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import ModalPet from "@/components/Modal/ModalPet/ModalPet";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectIsLoggedIn } from "@/redux/auth/selectors";
import ModalInfo from "@/components/Modal/ModalPet/ModalInfo/ModalInfo";

const PetListItem = (props: PetItem) => {
  const {
    title,
    species,
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
    species,
  });
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const isUserLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <div className={s.list}>
      <div className="flex flex-col w-full gap-5">
        <div className="flex items-center w-full h-[190px] overflow-hidden rounded-[15px]">
          <img
            src={imgURL}
            alt={species}
            className="object-contain"
            width={287}
            height={178}
          />
        </div>
        <div className="flex flex-col justify-end w-full h-full gap-3">
          <div className="flex flex-row justify-between">
            <p className={s.title}>{title}</p>
            <p className={s.title}>{popularity}</p>
          </div>
          <div className="flex flex-row gap-3.5">
            {petCardInfo.map(({ label, value }) => (
              <div className="flex flex-col ">
                <p className={s.listRowLabel}>{label}</p>
                <p className={s.subtitle}>{value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <p className={`${s.subtitle} mb-6`}>{comment}</p>

            <p className={s.subtitle}>
              {price === undefined ? (
                <span className="text-amber-500">{category}</span>
              ) : (
                `$${price}`
              )}
            </p>
            <div className="flex flex-row w-full justify-between pt-3">
              <Button
                className={s.learnButton}
                type="button"
                label="Learn more"
                variant="primary"
                onClick={handleOpenModal}
              />
              <Button
                className={s.likeButton}
                type="button"
                variant="secondary"
                icon={<HeartIcon />}
              />
            </div>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
          {isUserLoggedIn ? (
            <ModalPet props={props} handleOpenModal={handleCloseModal} />
          ) : (
            <ModalInfo
              title="Attention"
              comment="We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."
              imgURL={DogEmoji}
              isAuth={isUserLoggedIn}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default PetListItem;
