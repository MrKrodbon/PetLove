import {
  useGetFriendsQuery,
  useGetNewsQuery,
  useGetPetsQuery,
} from "../redux/news/operations";
import { useAppSelector } from "./useAppSelector";

interface PageDataProps {
  pageType: "newsList" | "ourFriendsList" | "petList";
}

const usePageData = ({ pageType }: PageDataProps) => {
  // const { data: petList } = useGetPetsQuery({ page: currentPage, limit: 10 });
  //TODO: Add to get friends list and pet list
  // const { data: newsList } = useGetNewsQuery({
  //   page: currentNewsPage,
  //   limit: 10,
  // });

  // const { data: friendsList } = useGetFriendsQuery({});

  switch (pageType) {
    case "newsList": {
      // return { title: "News", newsList, currentPage: currentNewsPage };
      break;
    }
    case "ourFriendsList": {
      //TODO: add friend list here
      // return {
      //   title: "Find your favourite pet",
      //   friendsList,
      //   currentPage: currentNewsPage,
      // };
      break;
    }
    case "petList": {
      //TODO: add pet list here
      return {
        title: "Find your favourite pet",
        petList,
        currentPage: currentNewsPage,
      };
    }
    default:
      throw new Error(`Unknown pageType: ${pageType}`);
  }
};

export default usePageData;
