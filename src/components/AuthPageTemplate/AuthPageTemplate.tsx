import { ReactNode } from "react";
import {
  Container,
  AuthImageContainer,
  AuthImageComment,
  AuthPetImageComment,
  AuthPetNameComment,
  AuthFormContainer,
} from "../../common/styles";
import Header from "../../layouts/Header/Header";
import { AuthContainer } from "../../pages/LoginPage/LoginPage.styles";

interface PetInfo {
  petName: string;
  petBirthday: string;
  description: string;
}

interface AuthPageTemplateProps {
  type: "login" | "register";
  iconSrc: string;
  petInfo: PetInfo;
  title: "Log in" | "Register";
  subtitle: string;
  form: ReactNode;
}

const AuthPageTemplate = ({
  type,
  iconSrc,
  form,
  petInfo,
  title,
  subtitle,
}: AuthPageTemplateProps) => {
  return (
    <Container>
      <Header />
      <AuthContainer>
        <AuthImageContainer type={type}>
          <AuthImageComment>
            <AuthPetImageComment>
              <img src={iconSrc} />
            </AuthPetImageComment>
            <div>
              <AuthPetNameComment>
                <div className="flex flex-row justify-between">
                  <p className="text-base">{petInfo.petName}</p>
                  <p>
                    <span className="text-xs text-gray-400">Birthday</span> :{" "}
                    <span className="text-xs text-black">
                      {petInfo.petBirthday}
                    </span>
                  </p>
                </div>
                <p className="text-xs text-gray-700">{petInfo.description}</p>
              </AuthPetNameComment>
            </div>
          </AuthImageComment>
        </AuthImageContainer>
        <AuthFormContainer>
          <div className="flex flex-col gap-4 mb-8 w-fit">
            <p className="text-5xl text-left">{title}</p>
            <p className="text-left">{subtitle}</p>
          </div>
          {form}
        </AuthFormContainer>
      </AuthContainer>
    </Container>
  );
};

export default AuthPageTemplate;
