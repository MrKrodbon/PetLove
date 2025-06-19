import css from "./NewsItem.module.scss";

export interface NewsItemProps {
  date: string;
  id?: string | null;
  imgUrl: string | "";
  text: string | "";
  title: string | "";
  url: string | "";
  _id?: string | null;
}

const NewsListItem = ({ imgUrl, date, text, title, url }: NewsItemProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB");
  return (
    <div className={css["news-item"]}>
      <div className="w-full  h-[149px] gap-5">
        <div className="flex items-center w-full h-full overflow-hidden rounded-[15px]">
          <img src={imgUrl} alt={title} className="object-fit w-full h-full" />
        </div>
        <div className="flex flex-col justify-center w-full h-[149px] gap-3">
          <p className={css["news-item_title"]}>{title}</p>
          <p className={css["news-item_description"]}>{text}</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className={css["news-item_date"]}>{formattedDate}</p>
          <a href={url} target="_blank" className="text-orange-400">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsListItem;
