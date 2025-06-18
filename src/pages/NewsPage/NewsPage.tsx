import PageTemplate from "../../components/PageTemplate/PageTemplate";
import usePageData from "../../hooks/usePageData";
import css from "./NewsPage.module.css";

const NewsPage = () => {
  const {
    title = "",
    newsList = [],
    currentPage = 1,
  } = usePageData({
    pageType: "newsList",
  });

  return (
    <div className={css.news_page}>
      <PageTemplate
        title={title}
        itemsList={newsList}
        currentPage={currentPage}
        listType={"newsList"}
      />
    </div>
  );
};

export default NewsPage;
