import { PetItem } from "@/types/types";
import s from "./PetListItem.module.scss";
import { Button } from "@/components/Button/Button";
import HeartIcon from "@/assets/icons/heart.svg?react";
import { buildPetInfo } from "@/utilities/buildPetInfo";

const PetListItem = ({
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
}: PetItem) => {
  const petCardInfo = buildPetInfo({
    name,
    birthday,
    category,
    sex,
    species,
  });

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
                <span className="text-amber-500">sold</span>
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
              />
              <Button
                className={s.likeButton}
                type="button"
                variant="secondary"
              >
                <HeartIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetListItem;
