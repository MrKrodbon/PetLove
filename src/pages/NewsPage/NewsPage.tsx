import PageTemplate from "@/components/layouts/PageTemplate/PageTemplate";
import useGetNews from "@/hooks/useGetNews";
import NewsListItem from "@/components/ItemList/NewsListItem/NewsItem";
import { NewsItem } from "@/types/types";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setNewPage } from "@/redux/news/slice";

const NewsPage = () => {
  const newsList = useGetNews();
  const { page, totalPages } = newsList;

  const dispatch = useAppDispatch();

  const handleChangePage = (newPage: number) => {
    dispatch(setNewPage(newPage));
  };

  return (
    <PageTemplate<NewsItem>
      title={"News"}
      items={newsList.results}
      pagination={{ page, totalPages }}
      hasSearchInput
      onPageChange={handleChangePage}
      renderItem={(n) => <NewsListItem key={n.id} {...n} />}
    />
  );
};

export default NewsPage;
