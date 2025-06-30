import { getCurrentDay } from "@/utilities/getCurrentDay";
import s from "./FriendsListItem.module.scss";
import { FriendsItem } from "@/types/types";
import NavItem from "@/components/Navigation/NavItem/NavItem";
import React from "react";

const FriendsListItem = ({
  address,
  addressURL,
  email,
  imageUrl,
  phone,
  url,
  workDays,
  title,
}: FriendsItem) => {
  const date = getCurrentDay();

  const workDay = workDays?.find((day) => workDays.indexOf(day) === date);

  return (
    <NavItem to={url} target="_blank">
      <div className={s.friendsItem}>
        <div className={s.image}>
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
              <p className={s.time}>
                {workDay.from} - {workDay.to}
              </p>
            </div>
          )}
          <div className={s.title}>{title}</div>
          {email && (
            <div className={s.labelWrapper}>
              <span className={s.rowLabel}>Email: </span>
              <p className={s.subtitle}>{email}</p>
            </div>
          )}

          <div className={s.labelWrapper}>
            <span className={s.rowLabel}>Address: </span>
            <NavItem
              to={addressURL}
              target="_blank"
              className={`whitespace-nowrap overflow-hidden overflow-ellipsis ${s.subtitle}`}
            >
              {address ?? "Website only"}
            </NavItem>
          </div>
          <div className={s.labelWrapper}>
            <span className={s.rowLabel}>Phone: </span>
            <p className={s.subtitle}>{phone ?? "Email only"}</p>
          </div>
        </div>
      </div>
    </NavItem>
  );
};

export default React.memo(FriendsListItem);
