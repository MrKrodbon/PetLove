import PageTemplate from "@/components/layouts/PageTemplate/PageTemplate";
import s from "./NewsPage.module.css";
import useGetNews from "../../hooks/useGetNews";

const NewsPage = () => {
  const newsList = useGetNews();

  return (
    <div className={s.newsPage}>
      <PageTemplate title={"News"} itemsList={newsList} listType={"newsList"} />
    </div>
  );
};

export default NewsPage;
