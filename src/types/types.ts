export interface RouteProps {
  component: React.ReactNode;
  redirectTo?: string;
}

export interface HeaderProps {
  isOpen?: boolean;
  isHomePage?: boolean;
}

export interface InputFieldProps {
  placeholder?: string;
  iconPosition?: "left" | "right";
  iconSrc: string;
  onInput?: () => void;
  value?: string;
  className?: string;
}

export interface AuthNavigationProps {
  isMobileMenu?: boolean;
}

export interface ItemListProps {
  isNewsList?: boolean;
  isFriendsList?: boolean;
  isPetList?: boolean;
}

export interface NewsItemProps {
  id?: string;
  imgUrl: string;
  alt: string;
  title?: string;
  text?: string;
  date?: string;
  moreInfo?: string;
}

export interface WorkDays {
  id?: string;
  isOpen: boolean;
  from?: string;
  to?: string;
}

export interface FriendsItemProps {
  id?: string;
  address: string;
  addressURL: string;
  email: string;
  imageUrl: string;
  phone: string;
  title: string;
  url: string;
  workDays: WorkDays[];
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
  imgUrl: string | null;
  title: string | null;
  text: string | null;
  date: string | null;
  url: string | null;
  id?: string | null;
  _id?: string | null;
}

export interface NewsState {
  page: 1;
  totalPages: 0;
  search: "";
}

export interface PaginationListProps {
  paginationList: {
    page: number;
    perPage: number;
    results: [];
    totalPages: number;
  };
  currentPage?: number;
}

export interface PagionationButtonProps {
  isCurrentPage?: boolean | false;
}
