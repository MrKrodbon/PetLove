import { useEffect } from "react";
import { selectNews, selectNewsByCurrentPage } from "../redux/news/selectors";
import { useAppDispatch } from "./useAppDispatch";
import { getNews } from "../redux/news/operations";
import { useAppSelector } from "./useAppSelector";

const useGetNews = () => {
  const dispatch = useAppDispatch();
  const newsList = useAppSelector(selectNews);
  const page = useAppSelector(selectNewsByCurrentPage);

  useEffect(() => {
    dispatch(getNews({ page: page }));
  }, [page]);

  return newsList;
};

export default useGetNews;
