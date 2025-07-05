import { useEffect } from "react";
import {
  selectNewsList,
  selectNewsByCurrentPage,
  selectSearchValue,
} from "../redux/news/selectors";
import { useAppDispatch } from "./useAppDispatch";
import { getNews } from "../redux/news/operations";
import { useAppSelector } from "./useAppSelector";
import { useDebounce } from "@uidotdev/usehooks";

const useGetNews = () => {
  const dispatch = useAppDispatch();
  const newsList = useAppSelector(selectNewsList);
  const page = useAppSelector(selectNewsByCurrentPage);
  const search = useAppSelector(selectSearchValue);
  const debouncedValue = useDebounce(search, 1000);
  useEffect(() => {
    if (!debouncedValue.trim()) {
      dispatch(getNews({ page, keyword: "" }));
    }
  }, [debouncedValue, dispatch, page]);

  useEffect(() => {
    if (debouncedValue.trim()) {
      dispatch(getNews({ page: 1, keyword: search }));
    }
  }, [debouncedValue, dispatch]);

  return newsList;
};

export default useGetNews;
