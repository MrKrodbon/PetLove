import { useDeviceType } from "../hooks/useDeviceType";

type BackgroundTypes = {
  pageType: "login" | "register";
  deviceType: "mobile" | "tablet" | "desktop";
};

export const getAuthDisplayBackground = ({
  pageType,
  deviceType,
}: BackgroundTypes) => {
  if (pageType === "login") {
    if (deviceType === "mobile")
      return "images/LoginImage/LoginImageMobile.jpg";
    if (deviceType === "tablet")
      return "images/LoginImage/LoginImageTablet.jpg";
    return "images/LoginImage/LoginImageDesktop.jpg";
  }
  if (pageType === "register") {
    if (deviceType === "mobile")
      return "images/RegisterImage/RegisterImageMobile.jpg)";
    if (deviceType === "tablet")
      return "images/RegisterImage/RegisterImageTablet.jpg";
    return "images/RegisterImage/RegisterImageDesktop.jpg";
  }
};
