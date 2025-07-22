import AuthButtons from "@/components/Auth/AuthButtons/AuthButtons";
import s from "./ModalInfo.module.scss";
import { Button } from "@/components/Button/Button";

interface ModalInfoProps {
  title: string;
  comment: string;
  imgURL: string;
  isAuth?: boolean;
}

const ModalInfo = ({ comment, imgURL, title, isAuth }: ModalInfoProps) => {
  return (
    <div className={s.modal}>
      <div className={s.modalTop}>
        <div className={s.imageContainer}>
          <img src={imgURL} alt={title} />
        </div>
        <div className="flex flex-row justify-between">
          <p className={s.title}>{title}</p>
        </div>
        <div className={s.commentContainer}>
          <p className={s.comment}>{comment}</p>
        </div>
      </div>

      <div className={s.modalBottom}>
        <div className="flex flex-row justify-center">
          {isAuth ? <Button label="Go to profile" /> : <AuthButtons />}
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
