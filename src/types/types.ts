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
