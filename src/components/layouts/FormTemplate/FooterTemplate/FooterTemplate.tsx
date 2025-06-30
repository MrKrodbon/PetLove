import { NavLink } from "react-router-dom";
import s from "./FooterTemplate.module.scss";

interface FooterTemplateProps {
  title: string;
  link?: string;
  linkLabel: "Login" | "Register";
}

const FooterTemplate = ({ title, link, linkLabel }: FooterTemplateProps) => {
  return (
    <div className="flex items-center justify-center gap-1.5 mt-3 md:mt-4">
      <p className={s.title}>{title}</p>
      <NavLink className={s.link} to={link || "#"}>
        {linkLabel}
      </NavLink>
    </div>
  );
};

export default FooterTemplate;
