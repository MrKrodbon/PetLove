import { useEffect, useState } from "react";
import { getDeviceType } from "../utilities/getDeviceType";
import { DeviceType } from "../types/types";

export const useDeviceType = (): DeviceType | "" => {
  const [deviceType, setDeviceType] = useState<DeviceType>(() =>
    getDeviceType()
  );

  useEffect(() => {
    const handleResize = () => {
      const newDevice = getDeviceType();

      if (newDevice !== deviceType) {
        setDeviceType(deviceType);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceType]);

  return deviceType;
};
