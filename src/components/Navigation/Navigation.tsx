import { NavLink } from "react-router-dom";
import { Button } from "../FilterSearchField/FilterSearchField.styles";
import { useDeviceType } from "../../hooks/useDeviceType";
import { HeaderNavigation } from "../../layouts/Header/Header.styles";

export const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return isActive
      ? "text-blue-500 underline font-semibold" // Коли активне
      : "text-gray-700 hover:text-blue-500"; // Коли неактивне
  };
  // <div>
  //   <AuthNavigation className="flex-col gap-2.5 w-full" isMobileMenu>
  //     {isUserLoggedIn ? (
  //       <NavLink to="/">
  //         <LoginButton className="w-full" onClick={handleLogoutUser}>
  //           Log out
  //         </LoginButton>
  //       </NavLink>
  //     ) : (
  //       <>
  //         <NavLink to="/login">
  //           <LoginButton className="w-full" onClick={handleCloseModal}>
  //             Log in
  //           </LoginButton>
  //         </NavLink>
  //         <NavLink to="/register">
  //           <RegisterButton className="w-full" onClick={handleCloseModal}>
  //             Register
  //           </RegisterButton>
  //         </NavLink>
  //       </>
  //     )}
  //   </AuthNavigation>
  // </div>;

  const deviceType = useDeviceType();

  if (deviceType === "mobile" || deviceType === "tablet") {
    return (
      <div className="flex flex-col items-center gap-2.5">
        <NavLink to="/news">
          <Button className="w-32">News</Button>
        </NavLink>
        <NavLink to="/find-pet">
          <Button className="w-32">Find Pet</Button>
        </NavLink>
        <NavLink to="/friends">
          <Button className="w-32">Our friends</Button>
        </NavLink>
      </div>
    );
  }

  return (
    <HeaderNavigation className="flex flex-row gap-2.5">
      <NavLink to="/news" className={buildLinkClass}>
        <Button>News</Button>
      </NavLink>
      <NavLink to="/find-pet" className={buildLinkClass}>
        <Button>Find Pet</Button>
      </NavLink>
      <NavLink to="/friends" className={buildLinkClass}>
        <Button>Our friends</Button>
      </NavLink>
    </HeaderNavigation>
  );
};
