export interface RouteProps {
  component: React.ReactNode;
  redirectTo?: string;
}

export interface AuthNavigationProps {
  isMobileMenu?: boolean;
}

interface User {
  name: string | null;
  email: string | null;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export interface NewsItem {
  date: string;
  id?: string;
  imgUrl: string;
  text: string;
  title: string;
  url: string;
  _id?: string;
}

export interface WorkDays {
  id?: string;
  isOpen: boolean;
  from?: string;
  to?: string;
}

export interface FriendsItem {
  id?: string;
  title: string;
  url: string;
  addressURL: string;
  imageUrl: string;
  address: string;
  workDays: WorkDays[];
  phone: string;
  email: string;
}

export interface NewsState {
  results: NewsItem[];
  page: number;
  perPage: number;
  totalPages: number;
  search: string;
  isLoading: boolean;
  error: string | null;
}

export interface FriendsState {
  results: FriendsItem[];
  isLoading: boolean;
  error: string | null;
}

export interface PetItem {
  _id: string;
  species: string;
  category: "lost" | "found" | "for-adoption";
  title: string;
  name: string;
  birthday: string;
  comment: string;
  price: string;
  sex: "male" | "female" | "unknown";
  location: string;
  imgURL: string;
  createdAt: string;
  updatedAt: string;
  user: string;
  popularity: number;
}

export interface PetState {
  results: PetItem[];
  page: number;
  perPage: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
}

export type PageType = {
  pageType: "login" | "register";
};

export type DeviceType = "mobile" | "tablet" | "desktop";

export interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactElement;
  className?: string;
}

export interface PagionationButtonProps {
  isCurrentPage?: boolean | false;
  label?: string;
  onClick: () => void;
}
