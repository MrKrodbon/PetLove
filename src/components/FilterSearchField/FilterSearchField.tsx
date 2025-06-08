import React from "react";
import { Button, FilterSearchFieldWrapper } from "./FilterSearchField.styles";
import SearchField from "../SearchField/SearchField";
import FilterField from "../FilterField/FilterField";
import { BlockVectorLine } from "../../common/styles";

const FilterSearchField = () => {
  return (
    <FilterSearchFieldWrapper>
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
        <Button>Popular</Button>
        <Button>Unpopular</Button>
        <Button>Cheap</Button>
        <Button>Expensive</Button>
      </div>
    </FilterSearchFieldWrapper>
  );
};

export default FilterSearchField;
