import { ReactNode } from "react";
import Header from "../Header/Header";

import css from "./AuthPageTemplate.module.css";
import shared from "../../styles/shared.module.css";

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
      <div className={css.auth_container}>
        <div
          className={`${
            title === "Log in"
              ? css["auth_image_login"]
              : css["auth_image_register"]
          }  relative rounded-[60px]   bg-no-repeat
                 w-[335px] h-[280px]
                 md:w-[704px] md:h-[302px]
                 xl:w-[592px] xl:h-[654px]`}
        >
          <div className={css.auth_image_comment}>
            <div className={css.auth_image_comment_pet}>
              <img src={iconSrc} />
            </div>
            <div>
              <div className={css.auth_pet_name_comment}>
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
        <div className={css.auth_form_container}>
          <div className="flex flex-col gap-4 mb-8 w-fit">
            <p className="text-5xl text-left">{title}</p>
            <p className="flex flex-wrap text-left xl:w-[424px]">{subtitle}</p>
          </div>
          {form}
        </div>
      </div>
    </div>
  );
};

export default AuthPageTemplate;
