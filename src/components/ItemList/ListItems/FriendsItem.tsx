import {
  ListItemImageWrapper,
  ListItemTitle,
  ListItemTextWrapper,
  ListItemWrapper,
  ListItemParagraphSpan,
  ListItemParagraph,
  FriendsListItem,
  ListItemTime,
} from "./ListItems.styles";
import { FriendsItemProps } from "../../../types/types";
import { getCurrentDay } from "../../../utilities/getCurrentDay";

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
      <FriendsListItem>
        <ListItemWrapper>
          <ListItemImageWrapper>
            <img
              src={imageUrl}
              alt={title}
              className="object-contain"
              width={90}
              height={90}
            />
          </ListItemImageWrapper>
          <ListItemTextWrapper>
            {workDay?.isOpen && (
              <div className="flex  justify-end w-full p-3">
                <ListItemTime>
                  {workDay.from} - {workDay.to}
                </ListItemTime>
              </div>
            )}

            <ListItemTitle>{title}</ListItemTitle>
            <div className="flex flex-row gap-0.5">
              <ListItemParagraphSpan>Email: </ListItemParagraphSpan>
              <ListItemParagraph>{email}</ListItemParagraph>
            </div>
            <div className="flex flex-row gap-0.5">
              <ListItemParagraphSpan>Address: </ListItemParagraphSpan>
              <ListItemParagraph>
                <a href={addressURL} className="text-amber-500">
                  {address}
                </a>
              </ListItemParagraph>
            </div>
            <div className="flex flex-row gap-0.5">
              <ListItemParagraphSpan>Phone: </ListItemParagraphSpan>
              <ListItemParagraph>{phone}</ListItemParagraph>
            </div>
          </ListItemTextWrapper>
        </ListItemWrapper>
      </FriendsListItem>
    </a>
  );
};

export default FriendsItem;
