import { filterLabels } from "../../constants/appLinks/appLinks";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setSearchValue } from "../../redux/news/slice";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import s from "./SearchFiltersPanel .module.css";
import chevronDown from "/public/icons/chevron-down.svg";
import searchIcon from "/public/icons/search.svg";

const SearchFiltersPanel = () => {
  const dispatch = useAppDispatch();

  const onInputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <div className={s.search}>
      <div className="flex flex-row flex-wrap gap-3">
        <Input placeholder="Search" iconPosition="right" iconSrc={searchIcon} />
        <div className="flex gap-2">
          <Input
            placeholder="Category"
            iconSrc={chevronDown}
            iconPosition="right"
            className="w-36"
          />
          <Input
            placeholder="By gender"
            iconSrc={chevronDown}
            iconPosition="right"
            className="w-36"
          />
        </div>
        <Input placeholder="By type" iconSrc={chevronDown} />
        <Input
          placeholder="Location"
          iconPosition="right"
          iconSrc={searchIcon}
          onInput={onInputHandle}
        />
      </div>
      <div className={s.vector} />
      <div className="flex flex-row flex-wrap my-3 gap-2.5">
        {filterLabels.map((label) => {
          return <Button className={s.filterButton} label={label} />;
        })}
      </div>
    </div>
  );
};

export default SearchFiltersPanel;
