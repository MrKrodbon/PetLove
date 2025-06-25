import s from "./PageTemplate.module.scss";
import SearchIcon from "@/assets/icons/search.svg";
import Header from "@/components/Header/Header";
import { Input } from "@/components/Input/Input";
import ItemList from "@/components/ItemList/ItemList";
import Pagination from "@/components/Pagination/Pagination";
import { ItemListProps } from "@/types/types";

interface PageTemplateProps {
  title: string;
  itemsList: ItemListProps;
}

const PageTemplate = ({ title, itemsList }: PageTemplateProps) => {
  return (
    <>
      <Header />

      <div className="flex flex-row justify-between mb-6 w-full">
        <p className={s.title}>{title}</p>
        <Input iconSrc={SearchIcon} placeholder="Search" iconPosition="left" />
      </div>
      <ItemList {...itemsList} />
      {itemsList.listType === "newsList" && (
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
