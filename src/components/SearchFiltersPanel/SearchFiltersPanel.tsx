import { filterLabels } from "@/constants/appLinks/appLinks";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import s from "./SearchFiltersPanel.module.scss";
import ChevronDown from "@/assets/icons/chevron-down.svg?react";
<<<<<<< Updated upstream
import SearchIcon from "@/assets/icons/search.svg?react";
=======
import DropDownItem from "../Dropdown/DropdownItem/DropDownItem";
import { City, FilterOptions, Filters } from "@/types/types";
import { useFilterParams } from "@/hooks/useFilterParams";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { handleSearch } from "@/redux/pets/slice";
import SearchableSelect from "../Select/SearchableSelect/SearchableSelect";
import Select from "../Select/Select";
>>>>>>> Stashed changes

const SearchFiltersPanel = () => {
  //implement later
  // const dispatch = useAppDispatch();

<<<<<<< Updated upstream
  // const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(han(e.target.value));
  // };
=======
const SearchFiltersPanel = ({
  categoryOptions = [],
  sexOptions = [],
  speciesOptions = [],
  cities = [],
}: SearchFiltersPanelProps) => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const debouncedSearch = useDebounce(searchValue, 1000);

  const {
    byPopularity,
    byPrice,
    category,
    locationId,
    sex,
    species,
    setFilters,
  } = useFilterParams();

  const onHandleSearch = (key: keyof Filters, value: string) => {
    setFilters({ [key]: value });
  };

  const onHandleSearchCity = (city: string) => {
    setSearchCity(city);
  };

  const filteredList = cities.filter(({ cityEn, countyEn }) =>
    `${cityEn} ${countyEn}`.toLowerCase().includes(searchCity.toLowerCase())
  );

  useEffect(() => {
    setFilters({ keyword: debouncedSearch });
  }, [debouncedSearch, setFilters]);

  useEffect(() => {
    const fullFilters = {
      keyword: debouncedSearch,
      byPopularity,
      byPrice,
      category,
      locationId,
      sex,
      species,
    };

    dispatch(handleSearch(fullFilters));
  }, [
    debouncedSearch,
    byPopularity,
    byPrice,
    category,
    locationId,
    sex,
    species,
    dispatch,
  ]);
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
          // onChange={onChangeHandle}
        >
          <SearchIcon />
        </Input>
      </div>
      <div className={s.vector} />
      <div className="flex flex-row flex-wrap my-3 gap-2.5">
        {filterLabels.map((label) => {
          return <Button className={s.filterButton} label={label} />;
=======
          onChange={(e) => setSearchValue(e.target.value)}
        >
          <SearchIcon />
        </Input>
        <div className="flex  gap-2">
          <div className="relative z-20">
            <Select
              name="Category"
              placeholder="Category"
              filterOptions={categoryOptions}
              icon={<ChevronDown />}
              value={category ?? ""}
              renderItem={(o) => <DropDownItem<FilterOptions> value={o} />}
              className="w-36"
              onSelect={(o) => onHandleSearch("category", o)}
              onResetValue={() => setFilters({ category: "" })}
            />
          </div>
          <div className="relative z-20">
            <Select
              name="Gender"
              placeholder="By gender"
              filterOptions={sexOptions}
              icon={<ChevronDown />}
              value={sex ?? ""}
              renderItem={(o) => <DropDownItem<FilterOptions> value={o} />}
              className="w-36"
              onSelect={(o) => onHandleSearch("sex", o)}
              onResetValue={() => setFilters({ sex: "" })}
            />
          </div>
        </div>
        <div className="relative z-10">
          <Select
            name="Type"
            placeholder="By Type"
            filterOptions={speciesOptions}
            icon={<ChevronDown />}
            value={species ?? ""}
            renderItem={(o) => <DropDownItem<FilterOptions> value={o} />}
            onSelect={(o) => onHandleSearch("species", o)}
            onResetValue={() => setFilters({ species: "" })}
          />
        </div>
        <div className="relative z-9">
          <SearchableSelect<City>
            name="Location"
            placeholder="Location"
            filterOptions={filteredList}
            icon={<SearchIcon />}
            onSelect={({ cityEn, _id }) => {
              onHandleSearchCity(cityEn);
              onHandleSearch("locationId", _id);
            }}
            onChange={(e) => setSearchCity(e.currentTarget.value)}
            renderItem={({ cityEn, countyEn, _id }) => (
              <DropDownItem value={`${cityEn} ${countyEn}`} key={_id} />
            )}
            value={searchCity ?? locationId ?? ""}
            valueExtractor={(o) => `${o.cityEn} ${o.countyEn}`}
            onResetValue={() => setFilters({ locationId: "" })}
          />
        </div>
      </div>
      <div className={s.vector} />
      <div className="flex flex-row flex-wrap my-3 gap-2.5">
        {filterButtons.map(({ label, filters }) => {
          return (
            <Button
              className={s.filterButton}
              label={label}
              onClick={() => setFilters(filters)}
            />
          );
>>>>>>> Stashed changes
        })}
      </div>
    </div>
  );
};

export default SearchFiltersPanel;
