import { ReactNode } from "react";

import s from "./AuthPageTemplate.module.scss";
import shared from "@/styles/shared.module.css";
import clsx from "clsx";
import Header from "@/components/Header/Header";

interface AuthPageTemplateProps {
  commentSrc?: string;
  commentAlt?: string;
  title: "Log in" | "Register";
  subtitle: string;
  form: ReactNode;
}

const AuthPageTemplate = ({
  commentSrc,
  commentAlt,
  form,
  title,
  subtitle,
}: AuthPageTemplateProps) => {
  return (
    <div className={shared.container}>
      <div className="pr-5 pl-5 md:pr-8 md:pl-8">
        <Header />
      </div>
      <div className={s.authContainer}>
        <div
          className={clsx(
            s.authImageContainer,
            title === "Log in" ? s.authImageLogin : s.authImageRegister
          )}
        >
          <div className={s.authImageComment}>
            <img src={commentSrc} alt={commentAlt} />
          </div>
        </div>
        <div className={s.authFormContainer}>
          <div className="flex flex-col gap-4 mb-8  text-left">
            <p className={s.title}>{title}</p>
            <p className={s.subtitle}>{subtitle}</p>
          </div>
          {form}
        </div>
      </div>
    </div>
  );
};

export default AuthPageTemplate;
