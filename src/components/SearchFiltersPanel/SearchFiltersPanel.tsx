import { filterLabels } from "@/constants/appLinks/appLinks";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import s from "./SearchFiltersPanel.module.scss";
import ChevronDown from "@/assets/icons/chevron-down.svg?react";
import SearchIcon from "@/assets/icons/search.svg?react";

const SearchFiltersPanel = () => {
  //implement later
  // const dispatch = useAppDispatch();

  // const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(han(e.target.value));
  // };

  return (
    <div className={s.search}>
      <div className="flex flex-row flex-wrap gap-3">
        <Input name="Search" placeholder="Search" iconPosition="right">
          <SearchIcon />
        </Input>
        <div className="flex gap-2">
          <Input
            name="Category"
            placeholder="Category"
            iconPosition="right"
            className="w-36"
          >
            <ChevronDown />
          </Input>
          <Input
            name="Gender"
            placeholder="By gender"
            iconPosition="right"
            className="w-36"
          >
            <ChevronDown />
          </Input>
        </div>
        <Input name="Type" placeholder="By type" iconPosition="right">
          <ChevronDown />
        </Input>
        <Input
          name="Location"
          placeholder="Location"
          iconPosition="right"
          // onChange={onChangeHandle}
        >
          <SearchIcon />
        </Input>
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
