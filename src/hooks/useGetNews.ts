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
    if (debouncedValue) {
      dispatch(getNews({ page, search }));
    }
  }, [debouncedValue, dispatch, page, search]);

  return newsList;
};

export default useGetNews;
