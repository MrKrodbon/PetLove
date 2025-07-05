import s from "./NewsItem.module.scss";

export interface NewsItemProps {
  date?: string | "";
  id?: string | null;
  imgUrl?: string | "";
  text: string | "";
  title: string | "";
  url: string | "";
}

const NewsListItem = ({
  imgUrl = "",
  date = "",
  text = "",
  title = "",
  url = "",
}: NewsItemProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB");
  return (
    <div className={s.newsItem}>
      <div className="w-full  h-[149px] gap-5">
        <div className="flex items-center w-full h-full overflow-hidden rounded-[15px]">
          <img src={imgUrl} alt={title} className={s.img} />
        </div>
        <div className="flex flex-col justify-center w-full h-[149px] gap-3">
          <p className={s.title}>{title}</p>
          <p className={s.description}>{text}</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className={s.date}>{formattedDate}</p>
          <a href={url} target="_blank" className={s.link}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsListItem;
