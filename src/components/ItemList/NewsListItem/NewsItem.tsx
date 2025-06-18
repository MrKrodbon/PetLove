import { NewsItemProps } from "../../../types/types";
import css from "./NewsItem.module.scss";

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
    <div className={css["news-item"]}>
      <div className="w-full  h-[149px] gap-5">
        <div className="flex items-center w-full h-full overflow-hidden rounded-[15px]">
          <img src={imgUrl} alt={alt} className="object-fit w-full h-full" />
        </div>
        <div className="flex flex-col justify-center w-full h-[149px] gap-3">
          <p className={css["news-item_title"]}>{title}</p>
          <p className={css["news-item_description"]}>{text}</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className={css["news-item_date"]}>{formattedDate}</p>
          <a href={moreInfo} target="_blank" className="text-orange-400">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
