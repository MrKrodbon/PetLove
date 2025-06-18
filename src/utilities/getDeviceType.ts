import { DeviceType } from "../types/types";

export const getDeviceType = (): DeviceType => {
  const mobileQuery = window.screen.width >= 320 && window.screen.width <= 767;
  const tabletQuery = window.screen.width >= 768 && window.screen.width <= 1024;

  if (mobileQuery) {
    return "mobile";
  } else if (tabletQuery) {
    return "tablet";
  } else {
    return "desktop";
  }
};
