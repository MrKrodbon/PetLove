import { filterButtons } from "@/constants/appLinks/appLinks";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import s from "./SearchFiltersPanel.module.scss";
import SearchIcon from "@/assets/icons/search.svg?react";
import ChevronDown from "@/assets/icons/chevron-down.svg?react";
import DropDownItem from "../Dropdown/DropdownItem/DropDownItem";
import Dropdown from "../Dropdown/Dropdown";
import { City, FilterOptions } from "@/types/types";
import { useFilterParams } from "@/hooks/useFilterParams";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { handleSearch } from "@/redux/pets/slice";
import { useSyncFilterWithRedux } from "@/hooks/useSyncFilterWithRedux";

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
  const debouncedCity = useDebounce(searchCity, 1000);
  useSyncFilterWithRedux();

  const { setFilters } = useFilterParams();

  const onHandleSearch = (search: string) => {
    setSearchValue(search);
  };

  const onHandleSearchCity = (city: string) => {
    setSearchCity(city);
  };

  const filteredList = debouncedCity
    ? cities.filter(({ cityEn }) =>
        cityEn.toLowerCase().includes(searchCity.toLowerCase())
      )
    : cities;

  useEffect(() => {
    dispatch(handleSearch(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <div className={s.search}>
      <div className="flex flex-row flex-wrap gap-3">
        <Input
          name="Search"
          placeholder="Search"
          iconPosition="right"
          onChange={(e) => onHandleSearch(e.target.value)}
        >
          <SearchIcon />
        </Input>
        <div className="flex  gap-2">
          <div className="relative z-20">
            <Dropdown
              name="Category"
              placeholder="Category"
              filterOptions={categoryOptions}
              icon={<ChevronDown />}
              renderItem={(o) => <DropDownItem<FilterOptions> value={o} />}
              className="w-36"
              onChange={(o) =>
                setFilters({
                  category: o,
                })
              }
              onResetValue={() => setFilters({ category: "" })}
            />
          </div>
          <div className="relative z-20">
            <Dropdown
              name="Gender"
              placeholder="By gender"
              filterOptions={sexOptions}
              icon={<ChevronDown />}
              renderItem={(o) => <DropDownItem<FilterOptions> value={o} />}
              className="w-36"
              onChange={(o) =>
                setFilters({
                  sex: o,
                })
              }
              onResetValue={() => setFilters({ sex: "" })}
            />
          </div>
        </div>
        <div className="relative z-10">
          <Dropdown
            name="Type"
            placeholder="By Type"
            filterOptions={speciesOptions}
            icon={<ChevronDown />}
            renderItem={(o) => <DropDownItem<FilterOptions> value={o} />}
            onChange={(o) =>
              setFilters({
                species: o,
              })
            }
            onResetValue={() => setFilters({ species: "" })}
          />
        </div>
        <div className="relative z-9">
          <Dropdown
            name="Location"
            placeholder="Location"
            filterOptions={filteredList}
            icon={<SearchIcon />}
            onChange={(city) =>
              setFilters({
                locationId: city._id,
              })
            }
            onInput={(e) => onHandleSearchCity(e.currentTarget.value)}
            renderItem={(o) => (
              <DropDownItem value={`${o.cityEn} ${o.countyEn}`} />
            )}
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
              onClick={() => {
                if (filters.byPopularity !== undefined) {
                  setFilters({ byPopularity: filters.byPopularity });
                }
                if (filters.byPrice !== undefined) {
                  setFilters({ byPrice: filters.byPrice });
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchFiltersPanel;
