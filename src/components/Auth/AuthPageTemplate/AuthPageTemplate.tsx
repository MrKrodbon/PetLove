import { ReactNode } from "react";

import s from "./AuthPageTemplate.module.css";
import shared from "@/styles/shared.module.css";
import clsx from "clsx";
import Header from "@/components/Header/Header";

interface PetInfo {
  petName: string;
  petBirthday: string;
  description: string;
}

interface AuthPageTemplateProps {
  iconSrc: string;
  petInfo?: PetInfo;
  title: "Log in" | "Register";
  subtitle: string;
  form: ReactNode;
}

const AuthPageTemplate = ({
  iconSrc,
  form,
  petInfo,
  title,
  subtitle,
}: AuthPageTemplateProps) => {
  return (
    <div className={shared.container}>
      <Header />
      <div className={s.authContainer}>
        <div
          className={clsx(
            s.authImageContainer,
            title === "Log in" ? s.authImageLogin : s.authImageRegister
          )}
        >
          <div className={s.authImageComment}>
            <div className={s.authImageCommentPet}>
              <img src={iconSrc} />
            </div>
            <div>
              <div className={s.authPetNameComment}>
                <div className="flex flex-row justify-between">
                  <p className="text-base">{petInfo?.petName}</p>
                  <p>
                    <span className="text-xs text-gray-400">Birthday</span>
                    <span className="text-xs text-black">
                      {petInfo?.petBirthday}
                    </span>
                  </p>
                </div>
                <p className="text-xs text-gray-700">{petInfo?.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.authFormContainer}>
          <div className="flex flex-col gap-4 mb-8 w-fit">
            <p className="text-5xl text-left text-black">{title}</p>
            <p className="flex flex-wrap text-left xl:w-[424px] text-black">
              {subtitle}
            </p>
          </div>
          {form}
        </div>
      </div>
    </div>
  );
};

export default AuthPageTemplate;
