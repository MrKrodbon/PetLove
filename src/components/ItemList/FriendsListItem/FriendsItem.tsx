import { FriendsItemProps } from "../../../types/types";
import { getCurrentDay } from "../../../utilities/getCurrentDay";
import css from "./FriendsItem.module.scss";

const FriendsItem = ({
  address,
  addressURL,
  email,
  imageUrl,
  phone,
  url,
  workDays,
  title,
}: FriendsItemProps) => {
  const date = getCurrentDay();
  const workDay = workDays.find((day) => workDays.indexOf(day) === date);

  return (
    <a href={url} target="_blank">
      <div className={css["friends_item"]}>
        <div className="w-full gap-5">
          <div className="flex items-center w-full h-[190px] overflow-hidden rounded-[15px]">
            <img
              src={imageUrl}
              alt={title}
              className="object-contain"
              width={90}
              height={90}
            />
          </div>
          <div className="flex flex-col justify-end h-full gap-3">
            {workDay?.isOpen && (
              <div className="flex  justify-end w-full p-3">
                <p className={css["friends-item_time"]}>
                  {workDay.from} - {workDay.to}
                </p>
              </div>
            )}
            <div className={css["friends-item_title"]}>{title}</div>
            <div className="flex flex-row gap-0.5">
              <span className={css["friends-item_span"]}>Email: </span>
              <p className={css["friends-item_subtitle"]}>{email}</p>
            </div>
            <div className="flex flex-row gap-0.5">
              <span className={css["friends-item_span"]}>Address: </span>
              <p className={css["friends-item_subtitle"]}>
                <a href={addressURL} className="text-amber-500">
                  {address}
                </a>
              </p>
            </div>
            <div className="flex flex-row gap-0.5">
              <span className={css["friends-item_span"]}>Phone: </span>
              <p className={css["friends-item_subtitle"]}>{phone}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default FriendsItem;
