import { useEffect } from "react";
import { selectNewsByCurrentPage } from "../redux/news/selectors";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { getFriends } from "../redux/friends/operations";
import { selectFriendsList } from "../redux/friends/selectors";

const useGetFriends = () => {
  const dispatch = useAppDispatch();
  const friendsList = useAppSelector(selectFriendsList);
  const page = useAppSelector(selectNewsByCurrentPage);

  useEffect(() => {
    dispatch(getFriends());
  }, [page]);

  return friendsList;
};

export default useGetFriends;
