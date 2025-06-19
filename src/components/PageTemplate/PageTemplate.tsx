import Header from "../Header/Header";
import ItemList from "../ItemList/ItemList";
import Pagination from "../Pagination/Pagination";
import { NewsState } from "../../types/types";
import SearchField from "../SearchField/SearchField";
import css from "./PageTemplate.module.scss";

interface PageTemplateProps {
  title: string;
  listType: "newsList" | "ourFriendsList" | "petList";
  itemsList: NewsState;
}

const PageTemplate = ({ title, listType, itemsList }: PageTemplateProps) => {
  return (
    <>
      <Header />

      <div className="flex flex-row justify-between mb-6 w-full">
        <p className={css["page-template_title"]}>{title}</p>
        <SearchField
          iconSrc="icons/search.svg"
          placeholder="Search"
          iconPosition="left"
        />
      </div>
      <ItemList listType={listType} itemsList={itemsList} />
      {listType !== "ourFriendsList" && (
        <div className="flex flex-row justify-center w-full">
          <Pagination
            totalPages={itemsList.totalPages}
            currentPage={itemsList.page}
          />
        </div>
      )}
    </>
  );
};

export default PageTemplate;
