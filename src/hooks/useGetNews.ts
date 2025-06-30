import { useEffect } from "react";
import {
  selectNewsList,
  selectNewsByCurrentPage,
} from "../redux/news/selectors";
import { useAppDispatch } from "./useAppDispatch";
import { getNews } from "../redux/news/operations";
import { useAppSelector } from "./useAppSelector";

const useGetNews = () => {
  const dispatch = useAppDispatch();
  const newsList = useAppSelector(selectNewsList);
  const page = useAppSelector(selectNewsByCurrentPage);

  useEffect(() => {
    dispatch(getNews({ page: page }));
  }, [page]);

  return newsList;
};

export default useGetNews;
