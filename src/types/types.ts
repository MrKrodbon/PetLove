export interface RouteProps {
  component: React.ReactNode;
  redirectTo?: string;
}

export interface AuthNavigationProps {
  isMobileMenu?: boolean;
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

export interface PetItemProps {
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
  date: string | null;
  id?: string | null;
  imgUrl: string | null;
  text: string | null;
  title: string | null;
  url: string | null;
  _id?: string | null;
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

export type PageType = {
  pageType: "login" | "register";
};

export type ItemListProps =
  | {
      listType: "newsList";
      itemsList: NewsItem[];
      page?: number;
      totalPages?: number;
    }
  | {
      listType: "friendsList";
      itemsList: FriendsItem[];
    };

export type DeviceType = "mobile" | "tablet" | "desktop";

// export interface PaginationList {
//   paginationList: {
//     page: number;
//     perPage: number;
//     results: [];
//     totalPages: number;
//   };
// }

export interface PagionationButtonProps {
  isCurrentPage?: boolean | false;
  label?: string;
  onClick: () => void;
}
