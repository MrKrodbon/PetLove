import { useEffect, useState } from "react";
import { getDeviceType } from "../utilities/getDeviceType";
import { DeviceType } from "../types/types";

export const useDeviceType = (): DeviceType | "" => {
  const [deviceType, setDeviceType] = useState<DeviceType | "">("");

  const handleResize = () => {
    const deviceType = getDeviceType();
    setDeviceType(deviceType);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};
