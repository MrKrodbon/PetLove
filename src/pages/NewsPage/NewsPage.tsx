import PageTemplate from "../../components/PageTemplate/PageTemplate";
import usePageData from "../../hooks/usePageData";

const NewsPage = () => {
  const {
    title = "",
    newsList = [],
    currentPage = 1,
  } = usePageData({
    pageType: "newsList",
  });
  return (
    <PageTemplate
      title={title}
      itemsList={newsList}
      currentPage={currentPage}
      listType={"newsList"}
    />
  );
};

export default NewsPage;
