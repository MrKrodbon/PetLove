import s from "./PageTemplate.module.scss";
import shared from "@/styles/shared.module.css";
import SearchIcon from "@/assets/icons/search.svg?react";
import Header from "@/components/Header/Header";
import { Input } from "@/components/Input/Input";
import ItemList from "@/components/ItemList/ItemList";
import Pagination from "@/components/Pagination/Pagination";
import SearchFiltersPanel from "@/components/SearchFiltersPanel/SearchFiltersPanel";
import React from "react";

type PageTemplateProps<T> = {
  title: string;
  items: T[];
  hasSearchInput?: boolean;
  hasFilterPanel?: boolean;
  onPageChange?: (newPage: number) => void;
  onSearchChange?: (search: string) => void;
  renderItem: (item: T) => React.ReactElement;
  pagination?: { totalPages: number; page: number };
};

function PageTemplate<T>({
  title,
  items,
  renderItem,
  pagination,
  onPageChange,
  onSearchChange,
  hasSearchInput = false,
  hasFilterPanel = false,
}: PageTemplateProps<T>) {
  const onPageChangeHandle = (newPage: number) => {
    onPageChange?.(newPage);
  };

  const onSearchChangeHandle = (value: string) => {
    onSearchChange?.(value);
  };
  return (
    <div className={shared.container}>
      <div className={s.page}>
        <Header />
        <div
          className={`flex ${
            hasFilterPanel ? "flex-col" : "flex-row"
          } justify-between mb-6 w-full`}
        >
          <p className={s.title}>{title}</p>
          {hasSearchInput && (
            <Input
              placeholder="Search"
              iconPosition="right"
              name="Search"
              onChange={(e) => onSearchChangeHandle(e.target.value)}
            >
              <SearchIcon />
            </Input>
          )}
          {hasFilterPanel && <SearchFiltersPanel />}
        </div>
        <ItemList items={items} renderItem={renderItem} />
        {pagination && (
          <div className="flex flex-row justify-center w-full">
            <Pagination
              onPageChange={onPageChangeHandle}
              totalPages={pagination?.totalPages}
              currentPage={pagination?.page}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PageTemplate;
