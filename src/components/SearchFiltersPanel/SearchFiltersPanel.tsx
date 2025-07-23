import { filterButtons } from "@/constants/appLinks/appLinks";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import s from "./SearchFiltersPanel.module.scss";
import SearchIcon from "@/assets/icons/search.svg?react";
import ChevronDown from "@/assets/icons/chevron-down.svg?react";
import DropDownItem from "../Dropdown/DropdownItem/DropDownItem";
import { City, FilterOptions, Filters } from "@/types/types";
import { useFilterParams } from "@/hooks/useFilterParams";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { handleSearch } from "@/redux/pets/slice";
import SearchableSelect from "../Select/SearchableSelect/SearchableSelect";
import Select from "../Select/Select";
import Close from "@/assets/icons/close.svg?react";
import clsx from "clsx";

interface SearchFiltersPanelProps {
  categoryOptions?: [];
  sexOptions?: [];
  speciesOptions?: [];
  cities?: City[];
}

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

  return (
    <div className={s.search}>
      <div className="flex flex-row flex-wrap gap-3">
        <Input
          name="Search"
          placeholder="Search"
          iconPosition="right"
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
              readOnly
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
              readOnly
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
            readOnly
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
            onResetValue={() => {
              setFilters({ locationId: "" });
              setSearchCity("");
            }}
          />
        </div>
      </div>
      <div className={s.vector} />
      <div className="flex flex-row flex-wrap my-3 gap-2.5">
        {filterButtons.map(({ label, filters }) => {
          const isActiveBtn =
            String(filters.byPopularity) === byPopularity ||
            String(filters.byPrice) === byPrice;

          return (
            <Button
              className={clsx(s.filterButton, {
                [s.activeButton]: isActiveBtn,
              })}
              label={label}
              icon={
                (isActiveBtn && (
                  <Close
                    onClick={(e) => {
                      e.stopPropagation();
                      if (
                        filters.byPopularity === true ||
                        filters.byPopularity === false
                      ) {
                        setFilters({
                          byPopularity: "",
                        });
                      } else if (
                        filters.byPrice === true ||
                        filters.byPrice === false
                      ) {
                        setFilters({
                          byPrice: "",
                        });
                      }
                    }}
                    width={18}
                    height={18}
                    className={s.icon}
                  />
                )) ||
                null
              }
              iconPosition={"right"}
              onClick={() => setFilters(filters)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchFiltersPanel;
