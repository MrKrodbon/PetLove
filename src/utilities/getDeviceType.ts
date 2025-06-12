import { DeviceType } from "../types/types";

export const getDeviceType = (): DeviceType => {
  const mobileQuery = window.matchMedia("(max-width: 767px)");
  const tabletQuery = window.matchMedia(
    "(min-width: 768px) and (max-width: 1280px)"
  );

  if (mobileQuery.matches) {
    return "mobile";
  } else if (tabletQuery.matches) {
    return "tablet";
  } else {
    return "desktop";
  }
};
