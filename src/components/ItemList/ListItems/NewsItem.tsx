import {
  ListItemDate,
  ListItemDescription,
  ListItemImageWrapper,
  ListItemTitle,
  ListItemTextWrapper,
  NewsListItem,
  ListItemWrapper,
} from "./ListItems.styles";
import { NewsItemProps } from "../../../types/types";

const NewsItem = ({
  alt,
  imgSrc,
  date = "",
  description,
  moreInfo,
  title,
}: NewsItemProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB");
  return (
    <NewsListItem>
      <ListItemWrapper>
        <ListItemImageWrapper>
          <img src={imgSrc} alt={alt} className="object-fit w-full h-full" />
        </ListItemImageWrapper>
        <ListItemTextWrapper>
          <ListItemTitle>{title}</ListItemTitle>
          <ListItemDescription>{description}</ListItemDescription>
        </ListItemTextWrapper>
        <div className="flex flex-row justify-between items-center">
          <ListItemDate>{formattedDate}</ListItemDate>
          <a href={moreInfo} target="_blank" className="text-orange-400">
            Read more
          </a>
        </div>
      </ListItemWrapper>
    </NewsListItem>
  );
};

export default NewsItem;
