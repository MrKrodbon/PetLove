import PageTemplate from "@/components/layouts/PageTemplate/PageTemplate";
import useGetNews from "@/hooks/useGetNews";
import NewsListItem from "@/components/ItemList/NewsListItem/NewsItem";
import { NewsItem } from "@/types/types";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setNewPage, handleSearch } from "@/redux/news/slice";
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

const NewsPage = () => {
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 1000);
  const newsList = useGetNews();
  const { page, totalPages } = newsList;

  const handleChangePage = (newPage: number) => {
    dispatch(setNewPage(newPage));
  };

  const onHandleSearch = (search: string) => {
    setSearchValue(search);
  };

  useEffect(() => {
    dispatch(handleSearch(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <PageTemplate<NewsItem>
      title={"News"}
      items={newsList.results}
      pagination={{ page, totalPages }}
      hasSearchInput
      onPageChange={handleChangePage}
      onSearchChange={onHandleSearch}
      renderItem={(n) => <NewsListItem key={n.id} {...n} />}
    />
  );
};

export default NewsPage;
