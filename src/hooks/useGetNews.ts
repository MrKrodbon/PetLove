import { useEffect } from "react";
import {
  selectNewsList,
  selectNewsByCurrentPage,
  selectSearchValue,
} from "../redux/news/selectors";
import { useAppDispatch } from "./useAppDispatch";
import { getNews } from "../redux/news/operations";
import { useAppSelector } from "./useAppSelector";

const useGetNews = () => {
  const dispatch = useAppDispatch();
  const newsList = useAppSelector(selectNewsList);
  const page = useAppSelector(selectNewsByCurrentPage);

  const searchValue = useAppSelector(selectSearchValue);

  useEffect(() => {
    dispatch(getNews({ page, keyword: searchValue.trim() }));
  }, [searchValue, dispatch, page]);

  return newsList;
};

export default useGetNews;
