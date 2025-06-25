import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { getFriends } from "../redux/friends/operations";
import { selectFriendsList } from "../redux/friends/selectors";

const useGetFriends = () => {
  const dispatch = useAppDispatch();
  const friendsList = useAppSelector(selectFriendsList);

  useEffect(() => {
    dispatch(getFriends());
  }, []);

  return friendsList;
};

export default useGetFriends;
