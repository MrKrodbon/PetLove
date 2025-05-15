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
  imgUrl,
  date = "",
  text,
  moreInfo,
  title,
}: NewsItemProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB");
  return (
    <NewsListItem>
      <ListItemWrapper isNewsPage>
        <ListItemImageWrapper>
          <img src={imgUrl} alt={alt} className="object-fit w-full h-full" />
        </ListItemImageWrapper>
        <ListItemTextWrapper isNewsPage>
          <ListItemTitle>{title}</ListItemTitle>
          <ListItemDescription>{text}</ListItemDescription>
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
