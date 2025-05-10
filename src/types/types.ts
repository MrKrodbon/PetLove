export interface RouteProps {
  component: React.ReactNode;
  redirectTo?: string;
}

export interface HeaderProps {
  isOpen?: boolean;
  isHomePage?: boolean;
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
  imgSrc: string;
  alt: string;
  title?: string;
  description?: string;
  date?: string;
  moreInfo?: string;
}

export interface AuthState {
  name: string | null;
  email: string | null;
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
  news: NewsItem[];
  loading: boolean;
  error: string | null;
}

export interface PagionationButtonProps {
  isCurrentPage?: boolean | false;
}
