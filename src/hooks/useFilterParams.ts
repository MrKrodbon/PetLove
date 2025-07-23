import { Filters } from "@/types/types";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export function useFilterParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") as Filters["keyword"] | null;
  const category = searchParams.get("category") as Filters["category"] | null;
  const species = searchParams.get("species") as Filters["species"] | null;
  const sex = searchParams.get("sex") as Filters["sex"] | null;
  const locationId = searchParams.get("locationId") as
    | Filters["locationId"]
    | null;
  const byPopularity = searchParams.get("byPopularity") as
    | Filters["byPopularity"]
    | null;
  const byPrice = searchParams.get("byPrice") as Filters["byPrice"] | null;

  const setFilters = useCallback((filters: Filters) => {
    setSearchParams((params) => {
      Object.entries(filters).forEach(([filterKey, filterValue]) => {
        if (filterValue === "") {
          params.delete(filterKey);
        } else {
          params.set(filterKey, String(filterValue));
        }
      });

      return params;
    });
  }, []);

  return {
    keyword,
    category,
    species,
    sex,
    locationId,
    byPrice,
    byPopularity,
    setFilters,
  };
}
