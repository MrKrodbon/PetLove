import { labels } from "@/constants/petInfo/petInfo";

interface PetInfo {
  name?: string;
  birthday?: string;
  sex?: string;
  species?: string;
  category?: string;
}

export const buildPetInfo = (pet: PetInfo) => {
  return Object.entries(pet).map(([_, value], index) => ({
    label: labels[index],
    value: value,
  }));
};
