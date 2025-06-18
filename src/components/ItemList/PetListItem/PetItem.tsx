import { PetItemProps } from "../../../types/types";
import css from "./PetItem.module.scss";

const PetItem = ({
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
}: PetItemProps) => {
  console.log(price);

  return (
    <div className={css["pet-list"]}>
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
            <p className={css[".pet-list_title"]}>{title}</p>
            <p className={css[".pet-list_title"]}>{popularity}</p>
          </div>
          <div className="flex flex-row gap-3.5">
            {[
              { label: "Name", value: name },
              { label: "Birthday", value: birthday },
              { label: "Sex", value: sex },
              { label: "Species", value: species },
              { label: "Category", value: category },
            ].map(({ label, value }) => (
              <div className="flex flex-col ">
                <p className={css[".pet-list_span"]}>{label}</p>
                <p className={css[".pet-list_subtitle"]}>{value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <p
              className={`${css[".pet-list_subtitle"]} w-full whitespace-nowrap overflow-hidden text-ellipsis h-[36px]`}
            >
              {comment}
            </p>

            <p className={`${css[".pet-list_subtitle"]} mt-1`}>
              {price === undefined ? (
                <span className="text-amber-500">sold</span>
              ) : (
                `$${price}`
              )}
            </p>
            <div className="flex flex-row w-full justify-between pt-3">
              <button className={css[".pet-list_learn--pressed"]} type="button">
                Learn more
              </button>

              <button className={css[".pet-list_like--pressed"]} type="button">
                <img src="/icons/heart.svg" width={18} height={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetItem;
