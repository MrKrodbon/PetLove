import PageTemplate from "../../components/PageTemplate/PageTemplate";
import css from "./NewsPage.module.css";
import useGetNews from "../../hooks/useGetNews";

const NewsPage = () => {
  const newsList = useGetNews();

  return (
    <div className={css.news_page}>
      <PageTemplate title={"News"} itemsList={newsList} listType={"newsList"} />
    </div>
  );
};

export default NewsPage;
