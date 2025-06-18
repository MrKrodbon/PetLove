import SearchField from "../SearchField/SearchField";
import FilterField from "../FilterField/FilterField";
import { BlockVectorLine } from "../../common/styles";
import css from "./FilterSearchField.module.css";

const FilterSearchField = () => {
  return (
    <div className={css["filter-search"]}>
      <div className="flex flex-row flex-wrap gap-3">
        <SearchField
          placeholder="Search"
          iconPosition="right"
          iconSrc="/public/icons/search.svg"
        />
        <div className="flex gap-2">
          <FilterField
            placeholder="Category"
            iconSrc="/public/icons/chevron-down.svg"
            iconPosition="right"
            className="w-36"
          />
          <FilterField
            placeholder="By gender"
            iconSrc="/public/icons/chevron-down.svg"
            iconPosition="right"
            className="w-36"
          />
        </div>
        <FilterField
          placeholder="By type"
          iconSrc="/public/icons/chevron-down.svg"
        />
        <SearchField
          placeholder="Location"
          iconPosition="right"
          iconSrc="/public/icons/search.svg"
        />
      </div>
      <BlockVectorLine />
      <div className="flex flex-row flex-wrap my-3 gap-2.5">
        {["Popular", "Unpopular", "Cheap", "Expensive"].map((label) => {
          return (
            <button className={css["filter-search--press"]}>{label}</button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSearchField;
