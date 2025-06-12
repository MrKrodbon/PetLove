import { useEffect, useState } from "react";
import { useDeviceType } from "./useDeviceType";
import { getAuthDisplayBackground } from "../utilities/getAuthDisplayBackground";
import { PageType } from "../types/types";

const useAuthDisplayBackground = ({ pageType }: PageType) => {
  const [backgroundImg, setBackgroundImg] = useState("");
  const deviceType = useDeviceType();
  useEffect(() => {
    if (deviceType === "") return;
    const backgroundImgSrc = getAuthDisplayBackground({ pageType, deviceType });
    setBackgroundImg(backgroundImgSrc || "");
  }, [deviceType, pageType]);

  return backgroundImg;
};

export default useAuthDisplayBackground;
